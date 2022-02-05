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

// 
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
// exports.postProductController = async (req, res) => {
//   try {
//     const { name, image, description, color, quantity, price } = req.body;
//     const chicken = {
//       id: productClone.at(-1).id + 1,
//       name,
//       slug: name.replace(" ", "-"),
//       image,
//       description,
//       color,
//       quantity,
//       price,
//     };
//     productClone.push(chicken);
//     res
//       .status(201)
//       .json({ msg: "product successfully created and added", chicken });
//   } catch (error) {
//     res.json(error, error.msg);
//   }
// };

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
// exports.deleteProductController = (req, res) => {
//   const { productId } = req.params;
//   const foundProduct = productClone.find(
//     (product) => +product.id === +productId
//   );
//   if (foundProduct) {
//     productClone = productClone.filter((product) => +product.id !== +productId);
//     res
//       .status(200)
//       .json({ msg: `item with id: ${productId} has been deleted` });
//   } else {
//     res
//       .status(404)
//       .json({ msg: `product with id: ${productId} was not found` });
//   }
// };

exports.updateProductController = await (req, res) => {
  try{
    const { productId } = req.params;

  }
  catch{res.status(400).json({msg:error.message})}
}
