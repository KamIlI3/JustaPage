const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  id: Number,
  imgURL: String,
  email: String
});

const ContactModel = mongoose.model('ContactModel', contactSchema, 'contact');

module.exports = ContactModel;
