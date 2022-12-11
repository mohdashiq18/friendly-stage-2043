const mongoose =require("mongoose")


const userSchema=new mongoose.Schema({
    email:{type:String,require:true,unique:true},
    password:{type:String,default:Date.now()},
    userDetail:{
        height:{type:Number,default:59},
        weight:{type:Number,default:50},
        birth:{
            day:{type:Number,default:1},
            month:{type:Number,default:1},
            year:{type:Number,default:1989}
        },
        gender:{type:String,  enum:["Male","Female","Unknown"],default:"Unknown" },
        units:{type:Boolean,default:true},
    },
    message:[String],
    photos:[String],
    report:[{
        exercise_name:{type:String,default:""},
        image:{type:String, default:""},
        muscle_name:{type:String, default:""}
    }]

})

const User=mongoose.model("user",userSchema)

module.exports=User

