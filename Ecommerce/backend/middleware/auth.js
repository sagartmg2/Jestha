const express = require('express');
const { body,validationResult, ValidationChain } = require('express-validator');
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
        body('password').isLength({ min: 8 }),
        body('email').isEmail().custom(value => {
            return User.findOne({email:value}).then(user => {
              if (user) {
                return Promise.reject('E-mail already in use');
              }
            });
          })
    ]);
   
module.exports ={
    validate_signup
}