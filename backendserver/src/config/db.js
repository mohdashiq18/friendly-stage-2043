const { default: mongoose } = require("mongoose");


const connectMongo=async()=>{
    return  mongoose.connect( process.env.DB_URL, {dbName: 'beautiqueen'}, {useNewUrlParser: true, useUnifiedTopology: true, strictQuery: true}, async(req,res) =>{
          try {
              console.log("success")
          } catch (err) {
              console.log(err)
          }
    })
  }


  module.exports = connectMongo