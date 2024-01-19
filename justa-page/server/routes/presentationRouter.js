const express = require('express');
const PresentationModel = require('../../db/models/presentationModel');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const presentation = await PresentationModel.find();
    res.json(presentation);
  } catch (error) {
    console.error('Error fetching presentation:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
