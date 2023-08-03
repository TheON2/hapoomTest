const { Sequelize } = require('sequelize');
require('dotenv').config()

const sequelize = new Sequelize('hapoom', 'root', process.env.DB_PASSWORD, {
  host: "127.0.0.1",
  port: "3306",
  dialect: 'mysql',
  logging: false,
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
});

module.exports = sequelize;