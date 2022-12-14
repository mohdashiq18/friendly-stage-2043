const User = require("../models/user.model")

const banAuth = async (req, res, next) => {
    if(!req?.headers.cookie){
        return next()
    }
    const _id = req?.headers.cookie
    let arr = _id.split("=")
    const user = await User.findOne({_id:arr[1]})

    if(user){
    if(user.status === "ban"){
       return res.status(404).send("you are ban from using our service")
    } else {
       return next()
    }
} else {
    return next()
}
    
  }



module.exports = banAuth