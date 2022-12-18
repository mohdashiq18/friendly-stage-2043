const express=require("express")
const User=require("../models/user.model")
const IP = require("ip")
const adminAuth = require("../middlewares/adminAuth")
const banAuth = require("../middlewares/banAuth")


const app=express.Router()


/* only for Admin panel */
/* get all users */
app.get("/" , adminAuth,  async(req,res)=>{
    try {
        let users= await User.find().select("-password")
        if(users){
            res.send(JSON.stringify(users))
        }
        else{ 
            res.status(404).send("no users found")
        }
    } catch (error) {
        res.send(error.message)
    }
})

app.get("/getone",async(req,res)=>{
    try {
        res.send(JSON.stringify(req?.cookies))
    } catch (error) {
        res.send(error.message)
    }
})




/* delete a user */
app.delete("/:email", adminAuth ,  async (req, res) => {
    let email = req.params.email
    try {
        let existing = await User.findOneAndDelete({email})
        if(existing){
            res.send(`User deleted successfully`)
        } else {
            res.status(404).send("user not found")
        }
    } catch (e) {
        res.send(e.message)
    }
   
})


app.post("/changerole", adminAuth ,  async (req, res) => {
    let {email, role} = req.body
    try {
        let existing = await User.findOne({email})
        if(existing){
            await User.findOneAndUpdate({email},{role:role},{new:true})
            res.send(`User updated successfully`)
        } else {
            res.status(404).send("user not found")
        }
    } catch (e) {
        res.send(e.message)
    }
   
})

app.post("/ban/:email/:status",  async (req, res) => {
    let email = req.params.email
    let status = req.params.status
    let email2 = req.mail2
    
    if(email===email2){
       return res.status(403).send("you can't ban or unban yourself")
    }
    try {
        let existing = await User.findOne({email})
        if(existing){
            await User.findOneAndUpdate({email},{status},{new:true})
            res.send(`User ban successfully`)
        } else {
            res.status(404).send("user not found")
        }
    } catch (e) {
        res.send(e.message)
    }
   
})

app.post("/unban/:email", adminAuth ,  async (req, res) => {
    let email = req.params.email
    let email2 = req.mail2
    
    if(email===email2){
       return res.status(403).send("you can't ban or unban yourself")
    }
    try {
        let existing = await User.findOne({email})
        if(existing){
            await User.findOneAndUpdate({email},{status:"active"},{new:true})
            res.send(`User unban successfully`)
        } else {
            res.status(404).send("user not found")
        }
    } catch (e) {
        res.send(e.message)
    }
   
})



/* admin panel close */

/* create a user */
app.post("/signup", async (req, res) => {
    const {email,name,phone,password} = req.body
    let ipAddress = IP.address()
    
    try {
        let existing = await User.findOne({email})
        if(existing){
            res.status(404).send("User Existed")
        } else {
            let user = await User.create({
                email,name,phone,password,ipAddress
            })
            res.send({token: `${user._id}:${email}:beautiqueen:${Date.now()}`})
        }
    } catch (e) {
        res.send(e.message)
    }
})

// login check

app.post("/login", async (req, res) => {
    const {email, password} = req.body
    const user = await User.findOne({email})
try {
    if(user){
        if(user.email===email && user.password===password){
           let newUser = await User.findOneAndUpdate({email},{logStatus:true},{new:true})
           res.cookie("_id", `${user?._id}` ,{httpOnly: true ,maxAge: 86400000,secure:true,sameSite:"none"})
           res.cookie("name", `${user?.name}` ,{httpOnly: true ,maxAge: 86400000,secure:true,sameSite:"none"})
          /*  res.send(req.cookies) */
           res.send(newUser)
        } else {
            res.status(404).send("user email or password mismatch")
        }

    } else {
        res.status(404).send(`User with ${email} not found`)
    }
} catch (e) {
    res.send(e.message)
}
})


app.post("/logout/:email", async (req, res) => {
    try {
        const email = req.params.email
        let existing = await User.findOne({email})
        if(existing){
            await User.findOneAndUpdate({email},{logStatus:false},{new:true})
            res.cookie("_id", `${existing?._id}` ,{httpOnly: true ,maxAge: 1,secure:true,sameSite:"none"})
            res.cookie("name", `${existing?.name}` ,{httpOnly: true ,maxAge: 1,secure:true,sameSite:"none"})
            res.send("logout successful")
        } else {
            res.status(404).send("user not found")
        }
    } catch (e) {
        res.send(e.message)
    }
})

/* update user */
app.patch("/:email", async (req, res) => {
    
    let email = req.params.email
   /*  let id = req.params.id */
    try {
        let existing = await User.findOneAndUpdate({email},{...req.body},{new: true})
        if(existing){
            res.send(JSON.stringify(existing))  
        } else {
            res.status(404).send("user not found")
        }
    } catch (e) {
        res.send(e.message)
    }
   
})

/* get single user */
app.get("/:email",  async (req, res) => {
    const email = req.params.email;
    try {
        let user = await User.findOne({email});
        if(user){
            res.send(user)
        } else {
            res.status(404).send(`user ${email} not found`)
        }
    } catch (e) {
        res.send(e.message)
    }
})

module.exports=app
