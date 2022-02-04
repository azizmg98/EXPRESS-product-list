const productSchema = require("../../db/models/Product");
const productData = require("../../data");

let productClone = productData;

// exports.getProductController = async (req, res) => {
//   try {
//     const products = await productSchema.find();
//     console.log(products);
//     res.json(products);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };
exports.getProductController = async (req, res) => {
  res.json(productClone);
};

exports.getSingleProductController = async (req, res) => {
  const { productId } = req.params;
  const foundProduct = productClone.find(
    (product) => +product.id === +productId
  );
  res.json(foundProduct);
};

exports.postProductController = (req, res) => {
  const { name, image, description, color, quantity, price } = req.body;
  const chicken = {
    id: productClone.at(-1).id + 1,
    name,
    slug: name.replace(" ", "-"),
    image,
    description,
    color,
    quantity,
    price,
  };
  productClone.push(chicken);
  res
    .status(201)
    .json({ msg: "product successfully created and added", chicken });
};

exports.deleteProductController = (req, res) => {
  const { productId } = req.params;
  const foundProduct = productClone.find(
    (product) => +product.id === +productId
  );
  if (foundProduct) {
    productClone = productClone.filter((product) => +product.id !== +productId);
    res
      .status(200)
      .json({ msg: `item with id: ${productId} has been deleted` });
  } else {
    res
      .status(404)
      .json({ msg: `product with id: ${productId} was not found` });
  }
};
