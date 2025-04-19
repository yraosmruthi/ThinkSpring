const Contact = require("../models/contact-model")

 const contactForm = async (req,res)=>{
    try{
     const response = req.body;
     const message=await Contact.create(response);
     
     return res.status(200).json({msg:"message sent successfully"})
    }catch(error){
       
          return res.status(400).json({msg:'backend error'})
    }
 }

 module.exports=contactForm;