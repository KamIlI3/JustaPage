const express = require('express');
const GalleryModel = require('../../db/models/galleryModel');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const gallery = await GalleryModel.find();
    res.json(gallery);
  } catch (error) {
    console.error('Error fetching gallery:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
