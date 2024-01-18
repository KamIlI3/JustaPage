const mongoose = require('mongoose');

const omnieSchema = new mongoose.Schema({
  imgURL: String,
  entry: String,
  presentation: String,
});

const Omnie = mongoose.model('Omnie', omnieSchema, 'omnie');

module.exports = Omnie;
