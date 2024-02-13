const express = require('express');
const SlidesModel = require('../../db/models/slidesModel');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const slides = await SlidesModel.find();
    res.json(slides);
  } catch (error) {
    console.error('Error fetching slides:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
