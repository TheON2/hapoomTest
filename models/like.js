const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Like = sequelize.define('Like', {
  likeId: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
}, {
  timestamps: false
});

module.exports = Like;
