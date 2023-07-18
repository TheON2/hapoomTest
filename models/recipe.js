const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    subtitle: { type: String, required: true },
    category: { type: String, required: true },
    title: { type: String, required: true },
    ingredient:{ type: String, required: false },
    tip:{ type: String, required: false },
    url:{ type: String, required: false },
    writerEmail:{type: String, required: true},
  },
  {
    timestamps: true
  });

// Create Model & Export
module.exports = mongoose.model('Recipe', recipeSchema);