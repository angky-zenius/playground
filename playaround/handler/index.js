const { combineResolver } = require('graphql-resolvers');

// For more information, refer to this document: https://github.com/lucasconstantino/graphql-resolvers/blob/HEAD/docs/API.md#combineresolvers
const queries = {
  productSearch: combineResolvers(async (parent, body, context) => {
    let opts = {};
    try {
      /* 
      * Prepare parameter
      */
      // Get roles
      const roles = _.get(context, ["roles"], []);
      // Get value from request body
      const { error, value } = schema.validate(body);
      if (error) {
        throw error;
      }
      // Get user id
      const userId = _.get(context, ["userId"]);
      // Get page and page limit
      opts = helper.getPageAndLimit(value);
      // Get amount of data
      const dataLimit = opts.LIMIT * opts.PAGE;
      // Get global data limit
      const defaultDataLimit = global.Config.DEFAULT_DATA_LIMIT;
      // Validate data amount
      if (dataLimit > defaultDataLimit) {
        throw new InternalServerError(
          `Request data too large. Not allowed to fetch data above ${defaultDataLimit} limit`
        );
      }
      // Set shorting value
      opts.sortSchema = helper.sorting(value);
      // Get type
      value.type = _.get(config, ["type", 0]);

      /* 
      * Start Operation
      */
      // Get product's criteria based on parameters
      const criteria = await getEntities(value, opts, roles, userId, context.source);
      // Get products based on search parameters
      let data;
      if (criteria.query) {
        // when query is presented in criteria
        data = await esInstance.search(
          esInfo["productSearch"].index,
          esInfo["productSearch"].type,
          criteria.query
        );
      } else {
        // when criteria is empty
        data = [];
      }
      return helper.formatEsData(data, opts.PAGE, opts.LIMIT, {
        recentlyViewed: criteria.recentlyViewed,
      });
    } catch (error) {
      return helper.formatEsData([], opts.PAGE, opts.LIMIT);
    }
  }),
};
export default queries;