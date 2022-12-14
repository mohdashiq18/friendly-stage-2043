const mongoose =require("mongoose")



const userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    phone:{type:Number,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    ipAddress:{type:String,required:true},
    role:{type:String,enum:["user","admin","CEO"],default:"user"},
    status:{type:String,enum:["active","ban"],default:"active"},
    logStatus: {type:Boolean, default:false},
    location:{
        coordinates:{
            type:[Number],
            required: true
        }
    }
},
{
    versionKey: false,
    timestamps: true
})

const User=mongoose.model("user",userSchema)

module.exports=User

