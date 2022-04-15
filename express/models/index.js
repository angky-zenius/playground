const dbConfig = require('../config/db.config.js');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.DIALECT,
        pool: {
            max: dbConfig.POOL.MAX,
            min: dbConfig.POOL.MIN,
            acquire: dbConfig.POOL.ACQUIRE,
            idle: dbConfig.POOL.IDLE,
        }
    }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.User = require('./user.model.js')(sequelize, Sequelize);
module.exports = db;