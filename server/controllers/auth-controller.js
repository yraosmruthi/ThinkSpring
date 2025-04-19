const User = require("../models/user-model")
const bcrypt = require('bcryptjs')



const register = async (req,res)=>{
  try{
   console.log("registeringggg..")
   const {username,email,phone,password }=req.body;
   const userExist = await User.findOne({email : email})
   if(userExist) {
    return res.status(400).json({msg:"email exists"})
   }
   
    
   const createduser=await User.create({
    username,
    email,
    phone,
    password});
   return res.status(200).json({
    msg:createduser,
    token: await createduser.generateToken(),
    userId:createduser._id.toString()
      });
  }catch(err){
    const status = 500;
    const message = 'internal server error';
    const error={
       status,
       message
    }
     next(error);
  }
}

const login = async (req,res)=>{
  try{

   const {email,password }=req.body;
   const userExist = await User.findOne({email : email})

   if(!userExist) {
    return res.status(400).json({msg:"Invalid credentials"})
   }

   const result = await bcrypt.compare(password, userExist.password);
   
   if(result) {
    return res.status(200).json({
      msg:"login successful ",
      token: await userExist.generateToken(),
      userId:userExist._id.toString()
        });

   } else{
    res.status(401).json({msg:"invalid email or password"});
   }
   
  }catch(error){
     res.status(500).json('internal server error')
  }
}


module.exports = {register,login};