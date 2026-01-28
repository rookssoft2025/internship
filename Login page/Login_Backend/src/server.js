const express=require("express")
const app=express();
require("dotenv").config();
const PORT=process.env.PORT || 5000;
const route=require("./routes/route.js")
const connectDb=require("./config/db.js")
const cors=require("cors");

connectDb();
app.use(cors())
app.use(express.json());
app.use("/api/auth",route)


app.listen(PORT,()=>{
    console.log(`Server Started at port ${PORT}`);
    
})