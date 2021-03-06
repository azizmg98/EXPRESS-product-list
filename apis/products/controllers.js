const Product = require("../../db/models/Product");
const productData = require("../../data");
const res = require("express/lib/response");

let productClone = productData;

//  create using database
exports.getProductController = async (req, res) => {
  try {
    const products = await Product.find();
    console.log(products);
    res.json(products);
  } catch (error) {
    res.status(500).json(error);
  }
};

//make it work with database
exports.getSingleProductController = async (req, res) => {
  const { productId } = req.params;
  const foundProduct = productClone.find(
    (product) => +product.id === +productId
  );
  res.json(foundProduct);
};

exports.postProductController = async (req, res) => {
  try {
    const chicken = req.body;
    const newChicken = await Product.create(chicken);
    res
      .status(201)
      .json({ msg: "product successfully created and added", newChicken });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

exports.deleteProductController = async (req, res) => {
  try {
    const { productId } = req.params;
    const foundProduct = await Product.findByIdAndDelete(productId);
    if (foundProduct) {
      res.status(204).end();
    } else {
      res
        .status(404)
        .json({ msg: `product with id: ${productId} was not found` });
    }
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

exports.updateProductController = async (req, res) => {
  try {
    const { productId } = req.params;
    const chicken = req.body;
    const foundProduct = await Product.findByIdAndUpdate(productId);
    await Product.updateOne(chicken);

    if (foundProduct) {
      res.status(201).json({ msg: `product ${productId} has been updated` });
    } else {
      res
        .status(404)
        .json({ msg: `product with id: ${productId} was not found` });
    }
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
