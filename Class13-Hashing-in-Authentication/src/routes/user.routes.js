const express = require("express")
const userModel = require("../model/user.model");
const jwt = require("jsonwebtoken")
const crypto = require("crypto")

const authRouter = express.Router();

// REGISTER API.........
authRouter.post("/register", async (req, res) => {
  const { email, name, password } = req.body

  const isUserAlreadyExists = await userModel.findOne({ email })

  if (isUserAlreadyExists) {
    return res.status(409).json({
      message: "User already exist from the same email"
    })
  }

  const hashPassword = crypto.createHash("md5").update(password).digest("hex");

  const userDetails = await userModel.create({
    name, email, password: hashPassword
  })

  const token = jwt.sign(
    {
      id: userDetails._id
    },
    process.env.JWT_SECRET
  )

  res.cookie("jwt_token", token);


  res.status(201).send({
    message: "User Registered Successfully",
    userDetails,
    token
  })
})

// LOGIN API...........
authRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // findOne({ email }) it returns the whole document based on the email we're sending from the post in the login API
  const user = await userModel.findOne({ email })

  if (!user) {
    return res.status(404).json({
      message: "User not found with is email Adress"
    })
  }

  const hashedPasswordByUser = crypto.createHash("md5").update(password).digest("hex");

  // if isEmailAlreadyExist is true then the above if cond will not be executed so we'll check for the password

  // it means if the password i.e present in our DB(userDetails.password) is same as the password given by the user
  // i.e from postman then we'll save it in isPasswordMatched
  const isPasswordMatched = (user.password === hashedPasswordByUser);

  if (!isPasswordMatched) {
    return res.status(401).json({
      message: "Invalid Password"
    })
  }

  const token = jwt.sign(
    {
      id: user._id
    },
    process.env.JWT_SECRET
  )

  res.cookie("jwt_token", token)

  res.status(201).json({
    message: "Successfully Logged in",
    user,
    token
  })

})

module.exports = authRouter;