import express from "express"
import morgan from "morgan"

const app = express();

app.use(morgan("dev"))

// all the files those are in public folder make them available in the browser
app.use(express.static("public"));



app.get("/api/health", (req, res) => {
  res.send("Hello, World!")
})

app.get("/api/data", (req, res) => {
  res.status(200).json({
    id: 1,
    name: "Alex",
    message: "Hello World, How are you"
  })
});

app.get("*name", (req, res) => {
  res.sendFile("public/index.html", {
    root: import.meta.dirname
  });
})


app.listen(3000, () => {
  console.log("Server is running on port 3000")
})