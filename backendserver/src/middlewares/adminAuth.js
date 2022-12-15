const User = require("../models/user.model")

const adminAuth = async (req, res, next) => {
    if(!req?.headers.cookie){
        return res.status(401).send("user not authenticated 2")
    }
    const _id = req?.headers.cookie
    let arr = _id.split("=")
    const user = await User.findOne({_id:arr[1]})

    if(req?.headers.cookie && !user){
        return res.status(401).send("user not authenticated")
    }

    if(user){
    if(user.role==="admin" || user.role==="CEO" && user.status === "active"){
        req.mail2 = user.email
        req.objId = arr[1]
       return next()
    } else {
        res.status(401).send("user has not permision for this opration")
    }
} else {
    res.status(401).send("user not exist please signup first")
}
    
  }



module.exports = adminAuth