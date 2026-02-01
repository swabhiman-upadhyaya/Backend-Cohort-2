require("dotenv").config();

const app = require("./src/app")
const connectToDb = require("./src/config/database")

connectToDb()

// The "id" we're getting in the mongodb database is always be unique and 
// "id": is given by mongodb to uniquely identify each note

app.listen(3000, () => {
  console.log("Server is running of port 3000")
})