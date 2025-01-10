const { CustomApiError } = require("../errors/custom-api");
const { StatusCodes } = require("http-status-codes");

const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomApiError) {
    return res.status(err.statusCode).json(err.message);
  }
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json("Something went wrong, try again later");
};

module.exports = errorHandlerMiddleware;
