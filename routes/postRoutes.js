const express = require('express');
const Post = require('../models/Post');
const router = express.Router();
 
router.post('/', async (req, res, next) => {
  try {
    const { title, body, category } = req.body;
    const newPost = new Post({ title, body, category });
    const saved = await newPost.save();
    res.status(201).json(saved);
  } catch (err) {
    next(err);
  }
});
 
router.get('/', async (req, res, next) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
