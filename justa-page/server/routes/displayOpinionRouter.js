const express = require('express');
const OpinionModel = require('../../db/models/opinionModel');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const opinion = await OpinionModel.find();
    res.json(opinion);
  } catch (error) {
    console.error('Error fetching slides:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
