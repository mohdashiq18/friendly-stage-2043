const express = require("express");
const { OrderModel } = require("../Models/orders.model");

const OrderRouter = express.Router();
OrderRouter.use(express.json());

OrderRouter.get("/", async (req, res) => {

    try {
      const data = await OrderModel.find();
      res.send(data);
    } catch (err) {
      console.log("err", err);
    }
  } 
);
OrderRouter.delete("/delete",async(req,res)=>{
  try{
    await OrderModel.remove()
    res.send("removed")
  }
  catch{
    res.send("remove err")
  }
})
OrderRouter.delete("/delete/:id",async(req,res)=>{
  const id=req.params.id
  try{
    await OrderModel.findByIdAndDelete({"_id":id})
    res.send("removed")
  }
  catch{
    res.send("remove err")
  }
})
OrderRouter.post("/add", async (req, res) => {
  const payload = req.body;
  try {
    const newOrder = new OrderModel(payload);
    await newOrder.save();
    res.send("New Order successfully Added");
  } catch (err) {
    console.log("err :>> ", err);
    res.send({ msg: err });
  }
});

module.exports = {OrderRouter};
