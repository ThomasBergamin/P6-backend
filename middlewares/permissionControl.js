const Sauce = require("../models/Sauce");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

module.exports = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const decodedToken = jwt.verify(token, process.env.SECRET_TOKEN);
  const userId = decodedToken.userId;
  Sauce.findOne({
    _id: req.params.id,
  })
    .then((sauce) => {
      if (sauce.userId === userId) {
        next();
      } else {
        throw res.status(403).json({
          error: error | "User ID non autorisé à modifier cette sauce",
        });
      }
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      });
    });
};
