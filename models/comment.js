const mongoose = require('mongoose');

// Define Schemes
const commentSchema = new mongoose.Schema({
    id: {type: String, required: true, unique: true},
    recipeId: {type: String, required: true},
    content: {type: String, required: true},
    writerEmail: {type: String, required: true},
  },
  {
    timestamps: true
  });

// Create Model & Export
module.exports = mongoose.model('Comment', commentSchema);