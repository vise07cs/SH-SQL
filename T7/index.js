
const express=require('express');
const app=express();
const db=require("./utils/db-connection")
const userRoute=require("./routes/userRoutes")


app.use(express.json());


app.use("/",userRoute);


db.sync().then(()=>{
  app.listen(3005,()=>{
  console.log("Server running")
})

  console.log("Database connected")
}).catch((err)=>{
  console.log("Error: ",err)
})

