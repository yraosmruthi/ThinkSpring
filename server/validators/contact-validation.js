const {z} = require('zod');
const contactForm = require('../controllers/contact-controller');

 const ContactMessageSchema = z.object({
    username:z
    .string({required_error:"username required"})
    .trim()
    .min(3,{message:"username incorrect"})
    .max(255,{message:"username incoorect"}) ,

    email:z
    .string({required_error:"email required"})
    .trim()
    .email({message:"username incorrect"}),

    message:z
    .string({required_error:"message required"})
    .trim()
    .min(1, { message: "message cannot be empty" })
    
    

 });

 module.exports = ContactMessageSchema;