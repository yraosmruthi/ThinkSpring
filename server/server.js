require("dotenv").config();

const express = require('express');
const app = express();
const connectDb = require('./utils/db');
const authrouter = require('./routes/auth-route');
const contactRoute = require('./routes/contact-route')


app.use(express.json());
app.use("/auth",authrouter);
app.use("/form",contactRoute)

app.get("/",(req,res)=>{
    res.send('hello');
})



const PORT = 3000;

connectDb().then(()=>{
    app.listen(PORT,()=>{
        console.log(`server running on port ${PORT}`);
    })
})
