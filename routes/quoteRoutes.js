const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const { data } = await axios.get('https://api.quotable.io/random');
    res.json({ quote: data.content, author: data.author });
  } catch (err) {
    next(err);
  }
});

router.get('/joke', async (req, res, next) => {
  try {
    const { data } = await axios.get('https://official-joke-api.appspot.com/random_joke');
    res.json({ setup: data.setup, punchline: data.punchline });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
