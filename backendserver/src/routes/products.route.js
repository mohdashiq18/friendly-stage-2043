const express=require("express")
const productRoute=express.Router()
const { ProductModel}=require("../Models/Produnctus.model")
productRoute.get('/',async(req,res)=>{
    try{
        const data=await ProductModel.find()
        res.send(data)
    }
    catch{
        res.send("err")
    }
})

productRoute.get("/:id",async(req,res)=>{
    const id=req.params.id
    try{
        const data=await ProductModel.findOne({"_id":id})
        res.send(data)
    }
    catch{
        res.send("err")
    }
})
productRoute.post("/addproduct",async(req,res)=>{
    const payload=req.body
    try{
        const product=new ProductModel(payload)
        await product.save()
        res.send("Product Add successful")
    }
    catch{
       res.send("Err")
    }
})

productRoute.patch("/update/:id",async(req,res)=>{
    const updateData=req.body
    const id=req.params.id
   try{
       await ProductModel.findByIdAndUpdate({"_id":id},updateData)
       res.send("Update successful")
   }
   catch{
     res.send("error")
   }
})

productRoute.delete("/delete/:id",async(req,res)=>{
    const id=req.params.id
    try{
        await ProductModel.findByIdAndDelete({"_id":id})
        res.send("Delete Successful")
    }
    catch{
        res.send("error")
    }
})
module.exports={
    productRoute
}