const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
  id: Number,
  imgURL: String,
  description: String,
});

const GalleryModel = mongoose.model('GalleryModel', gallerySchema, 'gallery');

module.exports = GalleryModel;
