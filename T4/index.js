const express=require('express');
const db=require("./utils/db-connection")
const userRoute=require("./routes/userRoutes")
// const busRoute=require("./routes/busRoute")

const app=express();



app.use(express.json());

// app.get("/",(req,res)=>{
//   res.send("Hello World");
// })

// app.use("/users",userRoute);
app.use("/",userRoute);

// app.use("/bus",busRoute);

app.listen(3003,()=>{
  console.log("Server running")
})