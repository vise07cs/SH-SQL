
const express=require('express');
const app=express();
const db=require("./utils/db-connection")
const studentController=require("./controllers/studentController")
const studentRoute=require("./routes/studentsRoute")

const studentModel=require("./model/students")

app.use(express.json());


app.use("/",studentModel);


db.sync({force:true}).then(()=>{
  app.listen(3004,()=>{
  console.log("Server running")
})

  console.log("Database connected")
}).catch((err)=>{
  console.log("Error: ",err)
})

