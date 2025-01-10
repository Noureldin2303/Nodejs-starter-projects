const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: [true, "product name is a must"] },
  price: { type: Number, required: [true, "product price is a must"] },
  rating: { type: Number, default: 3.5 },
  featured: { type: Boolean, default: false },
  company: {
    type: String,
    enum: {
      values: ["ikea", "liddy", "adidas", "activ"],
      message: "{VALUE} is not supported",
    },
  },
  createdAt: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("Product", productSchema);
