const app = require("./src/app")
const mongoose = require("mongoose")

/* 
The job of server.js is.....
Start the server and 
Connect it with the Database
*/


app.listen(3000, () => {
  console.log("App is running on port 3000")
})