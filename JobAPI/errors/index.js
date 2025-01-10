const { CustomAPIError } = require("./custom-api");
const { BadRequest } = require("./bad-request");
const { Unauthenticated } = require("./unautherized");

module.exports = {
  CustomAPIError,
  BadRequest,
  Unauthenticated,
};
