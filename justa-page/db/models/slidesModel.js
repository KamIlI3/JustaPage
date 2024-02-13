const mongoose = require('mongoose');

const slidesSchema = new mongoose.Schema({
  id: Number,
  imgURL: String,
  description: String,
});

const SlidesModel = mongoose.model('SlidesModel', slidesSchema, 'slides');

module.exports = SlidesModel;
