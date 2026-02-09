const express = require("express");
const noteModel = require("./model/notes.model");
const cors = require("cors")
const path = require("path");

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static("./public"))

app.post("/notes", async (req, res) => {

  const { title, description } = req.body;

  const notes = await noteModel.create({
    title, description
  })

  res.status(201).json({
    message: "Notes created Successfully!",
    notes
  })

})

app.get("/notes", async (req, res) => {

  const note = await noteModel.find();

  res.status(201).json({
    message: "Notes fetched Successfully!",
    note
  })
})

app.delete("/notes/:id", async (req, res) => {

  const id = req.params.id;

  await noteModel.findByIdAndDelete(id);

  const restNotes = await noteModel.find()

  res.status(200).json({
    message: "Note deleted successfully!",
    restNotes
  })
})

app.use("*name", (req, res) => {
  console.log(__dirname)
  res.sendFile(path.join(__dirname, "..", "/public/index.html"))
})

module.exports = app;