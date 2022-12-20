const { default: mongoose } = require("mongoose");



const productSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "user",
        required: true,
        default:"63a17a7347b83253f79ad94b"
    },
    name:{type:String,required:true},
    category:{type:String,required:true},
    description:{type:String},
    image:{type:String},
    price:{type:Number, min:1, required:true},
    ofPrice:{type:Number, min:1},
    quantity:{type:Number, min:0, required:true,default:1},
    ratings: {
        type: Number,
        default: 0
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            user: {
                type: mongoose.Schema.ObjectId,
                ref: "user",
                required: true
            },
            rating: {
                type: Number,
                required: true
            },
            comment: {
                type: String,
                required: true
            }
        }
    ],

},
{
    versionKey: false,
    timestamps: true
});


const Product = mongoose.model("product", productSchema);

module.exports = Product