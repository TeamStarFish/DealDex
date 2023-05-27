//Schema for Products

const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const ProductSchema = new mongoose.Schema({
  database: { type: String },
});

const ProductModel = product('product', UserSchema);

module.exports = ProductModel;
