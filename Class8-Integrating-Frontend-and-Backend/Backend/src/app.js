const express = require("express")
const noteModel = require("./model/notes.model")

const app = express()

app.use(express.json())

app.post("/notes", async (req, res) => {

  const { title, description, age } = req.body;

  const note = await noteModel.create({
    title, description, age
  })

  res.status(201).json({
    "message": "Note is created!",
    note
  })

})

app.get("/notes", async (req, res) => {

  const note = await noteModel.find();

  res.status(201).json({

    message: "Note fetched successfully!",
    note
  })

})

app.delete("/notes/:id", async (req, res) => {

  id = req.params.id;
  const note = await noteModel.findByIdAndDelete(id)

  const restNotes = await noteModel.find()

  res.status(200).json({
    deletedNote: note,
    restNotes,

  })

})

app.patch("/notes/:id", async (req, res) => {

  const id = req.params.id;
  const { description } = req.body;

  await noteModel.findByIdAndUpdate(id, { description });
  const allNotes = await noteModel.find();

  res.status(200).json({
    "message": "Note updated successfully!",
    "notes": allNotes
  })

})

module.exports = app;