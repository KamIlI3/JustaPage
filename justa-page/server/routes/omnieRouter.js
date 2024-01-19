const express = require('express');
const Omnie = require('../../db/models/omnieModel');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const omnie = await Omnie.find();
    res.json(omnie);
  } catch (error) {
    console.error('Error fetching Omnie:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
