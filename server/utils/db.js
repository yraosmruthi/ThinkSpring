const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI;

const connectDb = async ()=>{
    try{
        await mongoose.connect(URI);
        console.log('successful connection mongodb');

    }catch(error){
       console.log('error occurred');
       process.exit(1); // 1 for failure exit code

    }
};
module.exports = connectDb;