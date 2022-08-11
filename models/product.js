const mongoose = require('mongoose')
const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide a product name"],
  },
  price: {
    type: Number,
    required: [true, "must provide the product price"],
  },
  company: {
    type: String,
    enum: {
        values: ["ikea", "liddy", "caressa", "marcos"],
        message: '{VALUE} is not supported'
    },
  },
  rating: {
    type: Number,
    required: false,
  },
  featured: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});
module.exports = mongoose.model("Product", ProductSchema);