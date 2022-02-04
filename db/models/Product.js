const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const productSchema = new Schema({
  name: { type: String, required: true },
  image: String,
  description: String,
  color: String,
  quantity: { type: String, min: [0, "Can't have negative quantity"] },
  price: { type: Number, default: 2 },
});

module.exports = mongoose.model("Product", productSchema);
