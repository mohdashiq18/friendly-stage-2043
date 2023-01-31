require("dotenv").config();
const PORT = process.env.port;
const {productRoute}=require("./routes/products.route")
const express = require("express");
const app = express();
const cors = require("cors");
const { connection } = require("./Configs/db");

const { authenticate,AdminAuthenticate} =require("./Middlewares/authenticate");
const { usersRoute } =require("./routes/user.route")

const {OrderRouter} = require("./routes/order.route");


//Middlewares
app.use(express.json());
app.use( 
  cors({
    origin: "*",
  })
);
//user Route
app.use("/users",usersRoute)
//Order Route
app.use("/order", OrderRouter)

//Authenticate
// app.use(authenticate)
//Admin Authenticate
// app.use(AdminAuthenticate)
//Hotels Route
app.use("/products",productRoute)

app.get("/", (req, res) => {
  res.send("Welcome Home Page");
});

app.listen(8080, async () => {
  try {
    await connection;
    console.log("Connected to the DB");
  } catch (error) {
    console.log(error);
  }
  console.log(`Server is running at PORT : 8080`);
});
