const express = require("express")
const app = express();

app.get("/", (req, res) => {
  res.send("Hello world...")
})

app.get("/about", (req, res) => {
  res.send("This is About page...")
})

app.get("/home", (req, res) => {
  res.send("This is Home Page...")
})

app.get("/contact", function(req, res) {
  res.send("This is Contact Page...")
})

app.listen(3000)