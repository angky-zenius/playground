const _ = require("lodash");
const moment = require("moment");
import { request } from "graphql-request";
import Logger from "./logger";

const formatEsData = (data, PAGE, LIMIT, additional) => {
  const totalItems = _.get(data, ["hits", "total", "value"]);
  let pageInfo = getPageInfo(totalItems, PAGE, LIMIT);
  let formattedResponse = [];
  const hitLength = _.get(data, ["hits", "hits"], "").length;
  const recentlyViewed = _.get(additional, ["recentlyViewed"]);
  for (let i = 0; i < hitLength; ++i) {
    const response = _.get(data, ["hits", "hits", i, "_source"]);
    response.id = _.get(data, ["hits", "hits", i, "_id"]);
    transformProduct(response);
    if (response.updatedAt && moment(response.updatedAt).isValid()) {
      response.isNew =
        moment.utc().diff(moment(response.updatedAt), "days") <=
        global.Config.isNewDateLimit;
    } else {
      response.isNew = false;
    }

    if (recentlyViewed) {
      const recntlyVuLen = recentlyViewed.length;
      for (let view = 0; view < recntlyVuLen; view++) {
        if (recentlyViewed[view].productId == response.id) {
          response.viewedAt = recentlyViewed[view].viewedAt;
          break;
        }
      }
    }

    formattedResponse.push(productDetailRes(response));
  }
  if (recentlyViewed) {
    if (recentlyViewed.length == 0) {
      formattedResponse = [];
      pageInfo.totalItems = 0;
      pageInfo.hasNextPage = false;
      pageInfo.hasPreviousPage = false;
    } else {
      formattedResponse = _.orderBy(formattedResponse, ["viewedAt"], ["desc"]);
    }
  }
  const finalResponse = {
    pageInfo,
    nodes: formattedResponse,
  };
  // Logger.info(finalResponse, "Final Response of a product search ");
  return finalResponse;
};

const transformProduct = (product) => {
  if (product.learningPlan && !product.learningPlans) {
    product.learningPlans = [product.learningPlan];
  }
  if (!product.productId) {
    product.productId = product.id;
  }
  if (product.metaInfo?.tutorId) {
    product.authors= [product.metaInfo.tutorId];
  }
  if (product.enabled === "true") {
    product.enabled = true;
  }
  if (product.enabled === "false") {
    product.enabled = false;
  }
  if (product.imageUrl) {
    product.imageURL = product.imageUrl;
  }
  if (!product.seoMetaInfo)
    product.seoMetaInfo = {};
  if (!product.isPrakarjaCourse)
    product.isPrakarjaCourse = false

  if (!product.digitalPlatforms) product.digitalPlatforms = []

  if (product.highlights) {
    for (let highlight of product.highlights) {
      if (isNaN(highlight.value)) {
        highlight.stringValue = highlight.value;
        highlight.value = "0";
      }
    }
  }
    if (product.metaInfo?.tutorId && !product.authors) {
      product.authors = [product.metaInfo.tutorId];
    }
}

const formatProductDetails = (data, programId) => {
  let response = null;
  if (+_.get(data, ["hits", "hits", "length"], "0") > 0) {
    response = _.get(data, ["hits", "hits", 0, "_source"], {});
    response.id = _.get(data, ["hits", "hits", 0, "_id"]);
    transformProduct(response);
    response = productDetailRes(response, programId);
  }
  return response;
};
const productDetailRes = (response, programId) => {
  response.myCourse = {
    id: programId ? programId : response.id,
  };
  if (response.description && !_.isArray(response.description)) {
    response.description = [response.description];
  }
  if (response.categoryList && !_.isArray(response.categoryList)) {
    response.categoryList = [response.categoryList];
  } else {
    response.categoryList = [];
  }
  if (!response.shop) {
    response.shop = {};
  }
  response.webHost = _.get(global, ["Config", "WEB_HOST"], "");
  const finalResponse = _.omit(response, [
    "oplog_ts",
    "oplog_date",
    "__v",
    "shopId",
    "supportedFulfillmentTypes",
  ]);
  // Logger.info(finalResponse, "Final response of a product detail");
  return finalResponse;
};
const getPageAndLimit = (body) => {
  const SIZE = +_.get(body, ["size"], 0);
  return {
    PAGE: +_.get(body, ["page"], "0"),
    LIMIT: SIZE > 0 && SIZE <= 50 ? SIZE : 20,
  };
};
const getPageInfo = (totalItems, PAGE, LIMIT) => {
  return {
    currentPage: PAGE,
    size: LIMIT,
    totalItems,
    hasNextPage: +totalItems > PAGE * LIMIT,
    hasPreviousPage: totalItems < PAGE * LIMIT || PAGE > 0,
  };
};
const sorting = (body) => {
  let sortTypes = _.get(body, ["sort"], []);
  let sorting = [];
  if (!_.isEmpty(sortTypes)) {
    sortTypes.forEach((sort, index) => {
      sorting[sort.order] = sort;
    });
    sorting = sorting.filter(Boolean);
    sortTypes = [];
    sorting.forEach((sortType, item) => {
      sortTypes.push({
        [sortType.column]: { order: _.get(sortType, ["operator"]) },
      });
    });
  } else {
    sortTypes = [];
    sortTypes.push({ _score: { order: "desc" } });
  }
  return sortTypes;
};

const formatInterestData = (data) => {
  const interests = _.get(data, ["aggregations", "interests", "buckets"]) || [];
  _.forEach(interests, (interest) => {
    interest["courseCount"] = interest.doc_count;
    interest["viewCount"] = interest.viewCount
      ? (interest.viewCount || {}).value
      : 0;
    interest["tag"] = {
      slug: interest.key,
    };
    let skills = [];
    let tools = [];
    if (interest.skills) {
      _.forEach(interest.skills.buckets, (skill) => {
        skill["courseCount"] = skill.doc_count;
        skill["viewCount"] = skill.viewCount ? skill.viewCount.value : 0;
        skill["tag"] = {
          slug: skill.key,
        };
        skills.push(skill);
      });
    }
    if (interest.tools) {
      _.forEach(interest.tools.buckets, (tool) => {
        tool["courseCount"] = tool.doc_count;
        tool["viewCount"] = tool.viewCount ? tool.viewCount.value : 0;
        tool["tag"] = {
          slug: tool.key,
        };
        tools.push(tool);
      });
    }
    interest["skills"] = skills;
    interest["tools"] = tools;
  });
  // Logger.info(interests, "interests");
  return interests;
};
const externalCall = async (url, query, variable) => {
  try {
    const response = await request(url, query, variable);
    return response;
  } catch (err) {
    console.log("Error while calling external call : ", err);
    throw err;
  }
};

/**
 * Utility to push a message in Kafka
 * @param kafkaPublisher
 * @param topic
 * @param msg
 * @returns {Promise<void>}
 */
const publishToKafka = async ({ kafkaPublisher }, topic, msg) => {
  try {
    await kafkaPublisher.pushToQueue(topic, msg);
  } catch (e) {
    console.error(e, "Publish to Kafka");
  }
};

export {
  formatEsData,
  getPageAndLimit,
  sorting,
  formatProductDetails,
  formatInterestData,
  publishToKafka,
  externalCall
};
