const express = require("express")
const noteModel = require("./model/notes.model")

const app = express()

app.use(express.json())

app.post("/notes", async (req, res) => {

  const { title, description, age } = req.body;

  // The data of note i.e title and description will be created in the noteModel which is in remote/Mumbai cluster so we don't know
  // how much time it'll take so we give it "await" & "async" to "fat-arrow" function
  const note = await noteModel.create({
    title, description, age
  })

  res.status(201).json({
    message: "Notes created Successfully!",
    note
  })

})

module.exports = app;