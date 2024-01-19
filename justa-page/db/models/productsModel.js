const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
id: Number,
name: String,
price: Number,
category: String,
author: String,
full_description: String,
short_description: String,
product_imgURL: String,
product_source: String,
release_date: Date,
});

const Products = mongoose.model('Products', productsSchema, 'products');

module.exports = Products;
