const mongoose=require("mongoose")
const orderSchema=mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    price: { type: Number, required: true },
    ofPrice: { type: Number },
    quantity: { type: Number, required: true },
})
const OrderModel=mongoose.model("order",orderSchema)

module.exports={
    OrderModel
}