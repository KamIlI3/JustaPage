const express = require('express');
const Opinion = require('../../db/models/opinionModel');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const opinion = new Opinion(req.body);
    await opinion.save();
    res.status(201).send(opinion);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
