const errorHandlerMiddleware = async (err, req, res, next) => {
  return res.status(500).json("Something went wrong, try again later");
};

module.exports = errorHandlerMiddleware;