const notFound = (req, res) => {
  return res.status(404).json("Route not found");
};

module.exports = notFound;
