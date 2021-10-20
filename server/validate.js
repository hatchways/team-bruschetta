const { check, validationResult } = require("express-validator");
const { Profile } = require("./models/profile/Profile")

exports.validateRegister = [
  check("username", "Please enter a username").not().isEmpty(),
  check("email", "Please enter a valid email address").isEmail(),
  check(
    "password",
    "Please enter a password with 6 or more characters"
  ).isLength({
    min: 6
  }),
  (req, res, next) => {
    const errors = validationResult(req);

    console.log(errors);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    next();
  }
];

exports.validateLogin = [
  check("email", "Please enter a valid email address").isEmail(),
  check("password", "Password is required").not().isEmpty(),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    next();
  }
];

exports.validateProfile = [
  check("firstName", "first name must be at least 3 chars long").isLength({
    min: 3
  }),
  check("firstName", "first name is required").not().isEmpty().trim(),
  check("lastName", "last name must be at least 3 chars long").isLength({
    min: 3
  }),
  check("lastName", "last name is required").not().isEmpty().trim(),
  check("gender", "Please enter a gender").not().isEmpty(),
  check("dob", "Please enter a  date of birth").not().isEmpty(),
  check("email", "Please enter a valid email address").isEmail(),
  check("email", "email is required" ).not().isEmpty().trim(),
  check("phone", "Please enter a phone number").not().isEmpty().trim(),
  check("phone", "phone number must be at least 10 characters").isLength({
    min: 10
  }),
  check("address", "Please enter a address").not().isEmpty().trim(),
  check("description", "Please enter a description").not().isEmpty().trim(),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    next();
  }
];
