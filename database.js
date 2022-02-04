const mongoose = require("mongoose");

const connectDB = async () => {
  const PASSWORD = "BSYcPMX4KIvVI69e";
  const DATABASE = "productsDB";

  const conn = await mongoose.connect(
    `mongodb+srv://AzizMG:${PASSWORD}@cluster0.esh0o.mongodb.net/${DATABASE}?retryWrites=true&w=majority`,
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  );
  console.log(`mongo connected: ${conn.connection.host}`);
};

module.exports = connectDB;
