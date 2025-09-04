
const express=require('express');
const app=express();
const db=require("./utils/db-connection")
const studentController=require("./controllers/studentController")
const studentRoute=require("./routes/studentsRoute")


app.use(express.json());


app.use("/",studentRoute);

app.listen(3003,()=>{
  console.log("Server running")
})
