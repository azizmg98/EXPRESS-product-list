const express = require("express");
const chickenRouter = require("./apis/products/routes");
const connectDB = require("./database");

const app = express();
const PORT = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
  connectDB();
});

app.use("", chickenRouter);
