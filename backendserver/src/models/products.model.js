const { default: mongoose } = require("mongoose");



const productSchema = new mongoose.Schema({
    name:{type:String,required:true},
    category:{type:String,required:true},
    description:{type:String},
    image:{type:String},
    price:{type:Number, min:1, required:true},
    ofPrice:{type:Number, min:1},
    quantity:{type:Number, min:0, required:true}

},
{
    versionKey: false,
    timestamps: true
});


const Product = mongoose.model("product", productSchema);

module.exports = Product