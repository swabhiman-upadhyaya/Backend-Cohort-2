import { body, validationResult } from "express-validator"

const validate = (req, res, next) => {
  const errors = validationResult(req)

  if(errors.isEmpty()) {
    return next()
  }

  res.status(400).json({
    errors: errors.array()
  })
}

export const registerValidation = [
  body("username").isString().withMessage("Username must be a String"),

  // body("email").isEmail().withMessage("Email must be a email"), // below is custom validation example
  body("email").custom((value) => {
    if(!value.includes("@")) {
      throw new Error("Email must contain @")
    }
  }).withMessage("Email must be a valid email address"),
  

  body("password").isLength({ min: 8, max: 12 }).withMessage("Password must be between 8 and 12 characters long"),
  validate,
]