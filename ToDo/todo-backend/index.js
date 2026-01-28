const express=require('express');
const app=express();
const routes=require("./routes/routes.js");
const connectDB = require('./config/db.js');
const PORT=process.env.PORT
require('dotenv').config();
const cors=require('cors');

app.use(cors());

connectDB()  

app.use(express.json()); 
app.use('/api',routes);


app.listen(PORT,()=>{
    console.log(`Server is Started at ${PORT}`);
})