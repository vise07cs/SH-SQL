const express=require('express');
const db=require("./utils/dbConnection")
const studentRoute=require("./routes/studentRoute")
const app=express();



app.use(express.json());

app.get("/",(req,res)=>{
  res.send("Hello World");
})

app.use("/students",studentRoute);


app.listen(3002,()=>{
  console.log("Server running")
})