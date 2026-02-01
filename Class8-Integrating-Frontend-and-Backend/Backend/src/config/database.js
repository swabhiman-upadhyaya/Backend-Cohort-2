const mongoose = require("mongoose")

function connectToDb() {

  mongoose.connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Server is connected to the database!")
    })

}

module.exports = connectToDb;