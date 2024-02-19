const mongoose = require('mongoose');

const opinionSchema = new mongoose.Schema({
  opinionEmail: String,
  nick: String,
  opinion: String,
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const OpinionModel = mongoose.model('OpinionModel', opinionSchema, 'opinions');

module.exports = OpinionModel;
