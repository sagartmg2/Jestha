const express = require('express');
const { body, validationResult, ValidationChain } = require('express-validator');
const jwt = require("jsonwebtoken")
const User = require('../model/User');
// can be reused by many routes

// parallel processing
const validate = validations => {
  return async (req, res, next) => {
    await Promise.all(validations.map(validation => validation.run(req)));

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }
    res.status(400).json({ errors: errors.array() });
  };
};

const validate_signup = validate([
  body("name").exists(),
  body('password').isLength({ min: 8 }).withMessage("must be atleast 8 characters"),
  body('email').isEmail().custom(value => {
    return User.findOne({ email: value }).then(user => {
      if (user) {
        return Promise.reject('E-mail already in use');
      }
    });
  })
]);

const validateAccessToken = (req, res, next) => {

  try {

    let token = req.headers?.authorization?.split(" ")[1];

    let decoded;
    if (token) {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    }
    if (decoded) {
      req.decoded_token = decoded
      next()

    } else {
      return res.status(401).send({
        message: "Invalid Token"
      })
    }
  } catch (err) {
    res.status_code = 401
    next(err)
  }
}

const validSeller = (req, res, next) => {

  next();
}

module.exports = {
  validate_signup, validateAccessToken

}