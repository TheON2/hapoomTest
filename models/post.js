const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Post = sequelize.define('Post', {
  content: DataTypes.TEXT,
  musicTitle: DataTypes.TEXT,
  musicUrl: DataTypes.TEXT,
  tag: DataTypes.TEXT,
  placeName: DataTypes.TEXT,
  latitude: DataTypes.FLOAT,
  longitude: DataTypes.FLOAT,
  private: DataTypes.BOOLEAN
}, {
  timestamps: true
});

module.exports = Post;
