const User = require('./User');
const Post = require('./Post');
const Report = require('./Report');
const Like = require('./Like');
const Image = require('./Image');
const Comment = require('./Comment');
const sequelize = require('../config/database');

User.hasMany(Post, {
  foreignKey: 'userId',
});
Post.belongsTo(User, {
  foreignKey: 'userId',
});
User.hasMany(Report, {
  foreignKey: 'userId',
});
Report.belongsTo(User, {
  foreignKey: 'userId',
});
User.hasMany(Like, {
  foreignKey: 'userId',
});
Like.belongsTo(User, {
  foreignKey: 'userId',
});
User.hasMany(Image, {
  foreignKey: 'userId',
});
Image.belongsTo(User, {
  foreignKey: 'userId',
});
User.hasMany(Comment, {
  foreignKey: 'userId',
});
Comment.belongsTo(User, {
  foreignKey: 'userId',
});
Post.hasMany(Report, {
  foreignKey: 'postId',
});
Report.belongsTo(Post, {
  foreignKey: 'postId',
});
Post.hasMany(Like, {
  foreignKey: 'postId',
});
Like.belongsTo(Post, {
  foreignKey: 'postId',
});
Post.hasMany(Image, {
  foreignKey: 'postId',
});
Image.belongsTo(Post, {
  foreignKey: 'postId',
});
Post.hasMany(Comment, {
  foreignKey: 'postId',
});
Comment.belongsTo(Post, {
  foreignKey: 'postId',
});

sequelize.authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

sequelize.sync();

module.exports = { sequelize, User, Post, Report, Like, Image, Comment };
