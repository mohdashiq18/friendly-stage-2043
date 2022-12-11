require("dotenv").config()
const { config } = require("dotenv");
const express=require("express")
const cors=require("cors");
const { default: mongoose } = require("mongoose");
const userRouter= require("./route/user.route")
const app = express()
app.use(express.json())
app.use(cors())
app.use("/users",userRouter)

const connectMongo=async()=>{
  return  mongoose.connect( process.env.REACT_APP_URL, {dbName: 'beautiqueen'}, {useNewUrlParser: true, useUnifiedTopology: true, strictQuery: true}, async(req,res) =>{
        try {
            console.log("success")
        } catch (err) {
            console.log(err)
        }
  })
}


app.get("/",async(req,res)=>{
    try{
        res.send("hi we start")
    }catch(e){
        
        res.send("bad req")
    }
})

app.listen(8080,async()=>{
    await connectMongo()
    console.log("listening to http://localhost:8080");
})