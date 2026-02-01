const express = require("express")

const app = express();

app.use(express.json())

const notes = []

app.post("/notes", (req, res) => {

  notes.push(req.body)

// status code is used to indicate whether the server is able to done the job or not
res.status(201).json({
    "message": "Notes Created!"
  })
})

app.get("/notes", (req, res) => {
  res.status(200).json({
    notes: notes
  })
})

app.delete("/notes/:index", (req, res) => {
  
  delete notes[req.params.index]

  res.status(200).json({    // in "204" the message will not be shown by deleting
    "message": "Note is deleted"
  })
})

app.patch("/notes/:index", (req, res) => {
  
  notes[req.params.index].describtion = req.body.describtion;

  res.status(200).json({
    "message": "Notes Updated!"
  })
})

module.exports = app;