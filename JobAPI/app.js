require("dotenv").config();
require("express-async-errors");
const notFoundMiddleware = require("./middlewares/not-found");
const errorHandlerMiddleware = require("./middlewares/error-handler");
const userRouter = require("./routes/user");
const jobRouter = require("./routes/jobs");
const connectDB = require("./db/connect");
const express = require("express");

const app = express();

app.use(express.json());

app.use("/api/v1/auth", userRouter);
app.use("/api/v1/jobs", jobRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port: ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
