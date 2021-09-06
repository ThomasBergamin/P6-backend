const Sauce = require("../models/Sauce");

exports.createSauce = (req, res, next) => {};

exports.getOneSauce = (req, res, next) => {};

exports.modifySauce = (req, res, next) => {};

exports.deleteSauce = (req, res, next) => {};

exports.getAllSauces = (req, res, next) => {
  Sauce.find()
    .then((sauces) => {
      res.status(200).json(sauces);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

exports.addLike = (req, res, next) => {};
