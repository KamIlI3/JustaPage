const express = require('express');
const Contact = require('../../db/models/contactModel');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const contact = await Contact.find();
    res.json(contact);
  } catch (error) {
    console.error('Error fetching Contact:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
