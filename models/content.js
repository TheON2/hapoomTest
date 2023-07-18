const mongoose = require('mongoose');

// Define Schemes
const ContentSchema = new mongoose.Schema({
    id:{ type: String, required: true },
    recipeId: { type: String, required: true},
    content: { type: String, required: true },
    url: { type: String, required: false },
  },
  {
    timestamps: true
  });

// Create Model & Export
module.exports = mongoose.model('Content', ContentSchema);