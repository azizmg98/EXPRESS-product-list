const { Schema, model } = require("mongoose");

const ProductSchema = new Schema(
  {
    name: { type: String, required: true },
    image: String,
    description: String,
    color: String,
    quantity: { type: String, min: [0, "Can't have negative quantity"] },
    price: { type: Number, default: 2 },
  },
  { timestamps: true }
);

module.exports = model("Product", ProductSchema);
