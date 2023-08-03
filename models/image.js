const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Image = sequelize.define('Image', {
  imageId: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  url: DataTypes.STRING
}, {
  timestamps: false
});

module.exports = Image;
