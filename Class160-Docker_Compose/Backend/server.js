import express from "express"
import morgan from "morgan"

const app = express();

app.use(morgan("dev"))

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


app.listen(3000, () => {
  console.log("Server is running on port 3000")
})