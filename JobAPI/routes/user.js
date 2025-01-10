const express = require("express");
const userRouter = express.Router();

const { register, login } = require("../controllers/auth");

userRouter.route("/").post(register).post(login);

module.exports = userRouter;
