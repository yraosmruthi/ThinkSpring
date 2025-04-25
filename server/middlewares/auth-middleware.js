const jwt = require('jsonwebtoken')
const userModel = require("../models/user-model")

const  authMiddleware = async (req,res,next)=>{
   
    const token = req.header('Authorization')
    if(!token){
        return res.status(401).json({msg:'unauthorized http request'})
    }
    const jwtToken = token.replace("Bearer","").trim()
    try{
    const isValidate= jwt.verify(jwtToken,process.env.JWT_SECRET_KEY)
    const userData = await userModel.findOne({email:isValidate.email})
    req.user = userData;
    req.token = token;
     next();

    }catch(error){
    console.log(error);
  }
}

module.exports = authMiddleware;