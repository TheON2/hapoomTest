const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const dir = './images';

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'images/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
});

const upload = multer({storage: storage});

dotenv.config();

module.exports = function (app, Recipe, Content, Comment) {
  app.get('/api/recipe', async (req, res) => {
    try {
      const recipes = await Recipe.find();
      res.json(recipes);
    } catch (err) {
      res.status(500).json({message: err.message});
    }
  });

  app.get('/api/recipe/:recipeId', async (req, res) => {
    try {
      const recipe = await Recipe.find({id:req.params.recipeId});
      if (recipe == null) {
        return res.status(404).json({message: "Cannot find recipe"});
      }
      res.json(recipe);
    } catch (err) {
      return res.status(500).json({message: err.message});
    }
  });

  app.post('/api/recipe', upload.single('image'), async (req, res) => {
    console.log(req.body)
    console.log(req.file)
    const newRecipe = new Recipe({
      id: req.body.id,
      subtitle: req.body.subtitle,
      category: req.body.category,
      title: req.body.title,
      ingredient: req.body.ingredients,
      tip: req.body.tip,
      url: req.body.url,
      writerEmail: req.body.writerEmail
    })
    const savedRecipe = await newRecipe.save();
    const stringContent = JSON.parse(req.body.content)
    console.log(stringContent)

    const contentPromises = stringContent.map(async (content, index) => {
      const newContent = new Content({
        id: index,
        recipeId: req.body.id,
        content: content,
        url: "",
      });
      return newContent.save();
    });
    res.status(200)
  });

  app.put('/api/recipe/:id', upload.single('image'), async (req, res) => {
    try {
      const updatedRecipe = await Recipe.updateOne(
        { id: req.params.id },
        {
          subtitle: req.body.subtitle,
          category: req.body.category,
          title: req.body.title,
          ingredient: req.body.ingredients,
          tip: req.body.tip,
          url: req.body.url,
          writerEmail: req.body.writerEmail
        }
      );

      const stringContent = JSON.parse(req.body.content);
      console.log(stringContent);

      // Delete all existing content items for the recipe
      await Content.deleteMany({ recipeId: req.params.id });

      // Create new content items based on the client-provided content array
      const contentPromises = stringContent.map(async (content, index) => {
        return await Content.updateOne(
          { id: index, recipeId: req.params.id },
          { content: content },
          { upsert: true }
        );
      });

      await Promise.all(contentPromises);
      res.status(200).json({ message: "Recipe and content updated successfully." });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Error updating recipe and content." });
    }
  });

  app.delete('/api/recipe/:recipeId', async (req, res) => {
    try {
      const result = await Recipe.deleteOne({ id: req.params.recipeId });

      if (result.deletedCount === 0) {
        res.status(404).json({ message: '레시피를 찾을 수 없습니다.' });
      } else {
        res.json({ message: '레시피가 삭제되었습니다.' });
      }
    } catch(err) {
      console.error(err);
      res.status(500).json({ message: err.message });
    }
  });

  // Get all comments for a recipe
  app.get('/api/recipe/comments/:recipeId', async (req, res) => {
    try {
      const comments = await Comment.find({ recipeId: req.params.recipeId });
      res.json(comments);
    } catch (err) {
      res.status(500).json({message: err.message});
    }
  });

// Create a new comment for a recipe
  app.post('/api/recipe/comment', upload.single('image'), async (req, res) => {
    console.log(req.body)
    const newComment = new Comment({
      id: req.body.comment.commentId,
      recipeId: req.body.comment.recipeId,
      content: req.body.comment.comment,
      writerEmail: req.body.comment.writerEmail
    });
    try {
      const savedComment = await newComment.save();
      res.status(201).json(savedComment);
    } catch (err) {
      res.status(400).json({message: err.message});
    }
  });

// Delete a comment
  app.delete('/api/recipe/comment/:commentId', async (req, res) => {
    try {
      console.log(req.params.commentId)
      const removedComment = await Comment.deleteOne({ id: req.params.commentId });
    } catch (err) {
      res.status(500).json({message: err.message});
    }
  });

  app.get('/api/recipe/contents/:recipeId', async (req, res) => {
    console.log("진입")
    try {
      const contents = await Content.find({recipeId: req.params.recipeId});
      res.json(contents);
    } catch (err) {
      res.status(500).json({message: err.message});
    }
  });

}
