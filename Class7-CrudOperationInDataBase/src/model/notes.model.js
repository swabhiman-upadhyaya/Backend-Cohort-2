// We define schema and model inside the model folder (model.js)

const mongoose = require("mongoose")

// Here we're creating a schema i.e: mongoose.Schema() in which we'll be storing the format/structure of the data which will be stored
const noteSchema = new mongoose.Schema({
  title: String,
  description: String,
  age: String,
})

// Here we're creating a model i.e: mongoose.model() which help us to store and interact with the collection of all the notes and
// also we're passing the "noteSchema" by which the structure/format of the noteModel will be decided.............
// Model used to interact with the "notes" collection in MongoDB
const noteModel = mongoose.model("notes", noteSchema)
// Without a model we'll not be able to perform read,write(CRUD) operation in the database

module.exports = noteModel;