const { default: mongoose } = require("mongoose");



const cartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "user",
        required: true
    },
    approve:{type:String,default:false},
    product: {
        type: mongoose.Schema.ObjectId,
        ref: "product",
        required: true
    },
    quantity:{type:Number, min:1, required:true,default:1},
},
{
    versionKey: false,
    timestamps: true
});


const Cart = mongoose.model("cart", cartSchema);

module.exports = Cart