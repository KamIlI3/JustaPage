const mongoose = require('mongoose');

const presentationSchema = new mongoose.Schema({
  title: String,
  content: String,
  imgURL: String,
});

const PresentationModel = mongoose.model('PresentationModel', presentationSchema, 'presentation');

module.exports = PresentationModel;
