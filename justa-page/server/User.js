const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,  // Uwaga: przechowywanie haseł w formie jawnej jest złą praktyką!
});

const User = mongoose.model('User', userSchema);

module.exports = User;
