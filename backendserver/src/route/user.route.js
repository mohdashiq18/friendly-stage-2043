const express=require("express")
const User=require("./user.model")

const app=express.Router()

/* only for Admin panel */
/* get all users */
app.get("/",async(req,res)=>{
    try {
        let users= await User.find()
        if(users){

            res.send(JSON.stringify(users))
        }
        else{
            
            res.send("no users found")
        }
    } catch (error) {
        res.send(error.message)
    }
})

/* delete a user */
app.delete("/:email", async (req, res) => {
    let email = req.params.email
    try {
        let existing = await User.findOneAndDelete({email})
        if(existing){
            res.send("User deleted successfully")
        } else {
            res.send("user not found")
        }
    } catch (e) {
        res.status(404).send(e.message)
    }
   
})

/* admin panel close */

/* create a user */
app.post("/", async (req, res) => {
    const {email,userDetail,message,photos,report,password} = req.body
    try {
        let existing = await User.findOne({email})
        if(existing){
            res.status(404).send("User Existed")
        } else {
            let user = await User.create({
                email,password,userDetail,message,photos,report
            })
            res.send({token: `${user._id}:${email}:muscleFit`})
        }
    } catch (e) {
        res.status(404).send(e.message)
    }
   
})

/* update user */
app.patch("/", async (req, res) => {
    const {email,userDetail,message,photos,report,password} = req.body
   /*  let id = req.params.id */
    try {
        let existing = await User.findOneAndUpdate({email},{email,userDetail,message,photos,report,password})
        if(existing){
            res.send("User updated successfully")
        } else {
            res.send("user not found")
        }
    } catch (e) {
        res.status(404).send(e.message)
    }
   
})

/* get single user */
app.get("/:email", async (req, res) => {
    const email = req.params.email;
    try {
        let user = await User.findOne({email});
        if(user){
            res.send(user)
        } else {
            res.status(404).send(`user ${email} not found`)
        }
    } catch (e) {
        res.status(404).send(e.message)
    }
})

module.exports=app
