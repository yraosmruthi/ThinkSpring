const serviceModel = require('../models/service-model')

const service = async (req,res)=>{
    try{
        const response = await serviceModel.find()
        if(!response){
           return  res.status(404).json({msg:'no service found'})
        }
        res.status(200).json({msg:response})

        
     
    }catch(error){
        res.status(400).json({msg:'bad request'})
       console.log(`service error ${error}`)
    }
}

module.exports = service