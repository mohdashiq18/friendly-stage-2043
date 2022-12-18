require("dotenv").config()
const { config } = require("dotenv");
const express=require("express")
const cors=require("cors");
const { default: mongoose } = require("mongoose");
const connectMongo = require("./config/db")
const cookieParser = require('cookie-parser');
const banAuth = require("./middlewares/banAuth");
const app = express()
const userRouter= require("./routes/user.route")
const productRouter = require("./routes/products.route")
const cartRouter = require("./routes/cart.route")


app.use(express.json())
app.use(cors({
    origin: ["http://localhost:3000", "https://beautyqueen0.netlify.app"],
    credentials: true
}))
app.set("trust proxy", 1)
app.use(cookieParser())
app.use(banAuth)



app.use("/users", userRouter)
app.use("/products", productRouter)
app.use("/carts", cartRouter)




app.get("/",async(req,res)=>{
    try{
        res.send("Server started successfully")
    }catch(e){
        res.send("bad req")
    }
})

app.listen(process.env.PORT, async () => {
    await connectMongo()
    console.log("listening to http://localhost:8080");
})