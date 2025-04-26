require("dotenv").config();

const express = require('express');
const app = express();
const connectDb = require('./utils/db');
const authrouter = require('./routes/auth-route');
const contactRoute = require('./routes/contact-route')
const serviceRoute = require('./routes/service-route')
const cors = require('cors');


const corsOptions = {
    origin: 'http://localhost:5173',
    methods:'GET,POST,PUT,DELETE,PATCH,HEAD',
    credentials:true 
  }

app.use(cors(corsOptions));
app.use(express.json());
app.use("/auth",authrouter);
app.use("/form",contactRoute);
app.use("/data",serviceRoute);


app.get("/",(req,res)=>{
    res.send('hello');
})

const PORT = 3000;

connectDb().then(()=>{
    app.listen(PORT,()=>{
        console.log(`server running on port ${PORT}`);
    })
})
