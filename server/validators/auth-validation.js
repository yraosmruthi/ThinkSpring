  const { z } = require("zod");
 
  const signupSchema = z.object({
    username:z
    .string({required_error:"Name is required"})
    .trim()
    .min(3,{message:"there must be a minimum of 3 characters"})
    .max(255,{message:"there is a maximum of 255 characters"}),
  
    email:z
    .string({required_error:"Email is required"})
    .trim()
    .email({message:"Invalid email address"}),

    phone:z
    .string({required_error:"Phone is required"})
    .trim()
    .length(10,{message:"there must be 10 characters in a phone"}),

    password:z
    .string({required_error:"Password is required"})
    .trim()
    .min(7,{message:"there must be a minimum of 7 characters"})
    .max(1024,{message:"there is a maximum of 255 characters"})
    
});

const loginSchema = z.object({
  email:z
  .string({required_error:"email required"})
  .trim()
  .email({message:"enter valid email"}),

  password:z
  .string({required_error:"password required"})
  .trim()
  .min(3,{message:"Password invalid"})
  .max(1024,{message:"Password invalid"})
  
});

module.exports = {signupSchema,loginSchema};
   