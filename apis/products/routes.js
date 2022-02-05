const express = require("express");
const {
  postProductController,
  getProductController,
  deleteProductController,
  getSingleProductController,
  updateProductController,
} = require("./controllers");

const chickenRouter = express.Router();

chickenRouter.post("/api/products", postProductController);
chickenRouter.get("/api/products", getProductController);
chickenRouter.get("/api/products/:productId", getSingleProductController);
chickenRouter.delete("/api/products/:productId", deleteProductController);
chickenRouter.put("/api/products/:productId", updateProductController);

module.exports = chickenRouter;
