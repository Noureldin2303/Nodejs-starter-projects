const express = require("express");
const router = express.Router();
const RateLimit = require('express-rate-limit');

const {
  getAllProducts,
} = require("../controllers/products");

// set up rate limiter: maximum of 100 requests per 15 minutes
const limiter = RateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // max 100 requests per windowMs
});

// apply rate limiter to the getAllProducts route
router.route("/").get(limiter, getAllProducts);

module.exports = router;
