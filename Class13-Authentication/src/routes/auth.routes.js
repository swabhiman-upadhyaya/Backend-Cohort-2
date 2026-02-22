const express = require("express");
const userModel = require("../model/user.model");

const authRouter = express.Router();

authRouter.post("/register", async (req, res) => {
  const { name, email, password } = req.body

  const userDetails = await userModel.create({
    name, email, password
  })

  res.status(201).json({
    message: "Used Registered",
    userDetails
  })
})

module.exports = authRouter;