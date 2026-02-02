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

app.get("/notes", async (req, res) => {

  // noteModel.find() is used to find the all the notes from database cluster which is there is Mumbai so don't know 
  // how much time it'll take so...........
  const notes = await noteModel.find()

  // console.log(notes)

  res.status(200).json({
    message: "Notes fetched successfully!",
    notes
  })

})

module.exports = app;