const CustomAPIError = require("./custom-api");
const { StatusCodes } = require("http-status-codes");

class Unauthenticated extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

module.exports = { Unauthenticated };
