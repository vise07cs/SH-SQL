
const express=require('express');
const app=express();
const db=require("./utils/db-connection")
const studentRoute=require("./routes/studentsRoute")

require('./model')


app.use(express.json());


app.use("/",studentRoute);


db.sync().then(()=>{
  app.listen(3004,()=>{
  console.log("Server running")
})

  console.log("Database connected")
}).catch((err)=>{
  console.log("Error: ",err)
})

