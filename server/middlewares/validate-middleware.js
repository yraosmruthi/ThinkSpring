 const validate = (schema)=> async(req,res,next)=>{
   try{
     const parseBody = await schema.parseAsync(req.body);
     req.body=parseBody;
     next();
   }catch(err){
      
    //  const status=422;
    //  const message='Fill the input properly';
    //  const extraDetails=err.errors[0].message;

    //  const error={
    //   status,
    //   message,
    //   extraDetails
    //  }
     
    //  next(error);
    const extraDetail = err.errors?.[0]?.message || "Validation failed.";
    return res.status(422).json({
      message: 'Fill the input properly',
      extraDetails: extraDetail
    });
  }

};

 module.exports = validate;