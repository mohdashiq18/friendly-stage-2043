const mongoose =require("mongoose")



const userSchema=new mongoose.Schema({
    name:{type:String,require:true},
    phone:{type:Number},
    email:{type:String,require:true,unique:true},
    password:{type:String,require:true},
    ipAddress:{type:String}
})

const User=mongoose.model("user",userSchema)

module.exports=User

