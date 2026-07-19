import express from "express"
import morgan from "morgan"

const app = express();

app.use(morgan("dev"))
app.use(express.json())

app.get("/", (req, res) => {
  let sum = 0

  for (let i = 0; i < 10000000; i++) {
    sum += i;
  }

  res.send(`Hello World! Sum is ${sum}`)

})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})