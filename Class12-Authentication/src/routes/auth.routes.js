const express = require("express");
const userModel = require("../model/user.model");
const jwt = require("jsonwebtoken");

const authRouter = express.Router();

authRouter.post("/register", async (req, res) => {
  const { name, email, password } = req.body

  const isUserAlreadyExist = await userModel.findOne({ email })

  if (isUserAlreadyExist) {
    return res.status(400).json({
      message: "User already exists from this email"
    })
  }

  const userDetails = await userModel.create({
    name, email, password
  })

  const token = jwt.sign(
    {
      id: userDetails._id
    },
    process.env.JWT_SECRET
  )

  res.cookie("jwt_token", token);

  res.status(201).json({
    message: "Used Registered",
    userDetails,
    token
  })
})

module.exports = authRouter;