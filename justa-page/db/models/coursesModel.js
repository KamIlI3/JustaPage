const mongoose = require('mongoose');

const coursesSchema = new mongoose.Schema({
id: Number,
name: String,
full_description: String,
short_description: String,
imgURL: String,
reference: String,
});

const Courses = mongoose.model('Courses', coursesSchema, 'courses');

module.exports = Courses;
