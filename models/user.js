const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  userId: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
  nickname: {
    type: DataTypes.STRING,
  },
  userImage: {
    type: DataTypes.STRING,
  },
  method: {
    type: DataTypes.STRING,
  },
});

module.exports = User;
