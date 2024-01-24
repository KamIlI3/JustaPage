const mongoose = require('mongoose');

const omnieSchema = new mongoose.Schema({
  imgURL: String,
  entry: String,
  presentation: String,
  first_imgURL: String,
  second_imgURL: String,
});

const Omnie = mongoose.model('Omnie', omnieSchema, 'omnie');

module.exports = Omnie;
