const dotenv = require("dotenv");
const connectDB = require("./db/connect");
const Product = require("./models/products");
dotenv.config();

const productsToPush = require("./products.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Product.deleteMany();
    await Product.create(productsToPush);
    console.log("success");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();