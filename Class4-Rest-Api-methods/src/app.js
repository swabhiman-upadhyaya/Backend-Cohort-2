const express = require("express")

const app = express();

app.use(express.json())
// The above is used because our "express" server can read the 
// json data which is there is line no. 13 by-default

let notes = []

app.post("/notes", (req, res) => {

  console.log(req.body)
  // inside request.body there is the json data in terms of "title" and "description" 
  // which was passed from postman api

  notes.push(req.body);

  res.send("Note created")
})

app.get("/notes", (req, res) => {
  res.send(notes);
})

app.delete("/notes/:index", (req, res) => {
  console.log(req.params); // we'll get an object inside which index is a property
  console.log(req.params.index) // accessing the index inside req.params

  let index = req.params.index

  delete notes[index];

  res.send(`Note in ${index}th is being deleted`)
})

app.patch("/notes/:index", (req, res) => {

  let noteIdx = req.params.index;

  notes[noteIdx].title = req.body.title;

  res.send("Note Updated!")
})

app.put("/notes/:index", (req, res) => {

  title = req.body.title;
  describtion = req.body.describtion;

  res.send(`All task at index ${req.params.index} is Updated!`)
})

module.exports = app