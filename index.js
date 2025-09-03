const express=require('express');
const mysql=require('mysql2');
const app=express();

const connection=mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"Admin@123",
  database:"testdb"
})

connection.connect((err)=>{
  if(err){
    console.error("Error connecting to database:",err);
  }
  else{
    console.log("Connected to database");
  }
  // Create a sample table if it doesn't exist
  const creationQuery=`create table Students(
  id INT PRIMARY KEY AUTO_INCREMENT, 
  name VARCHAR(50),
  age INT(3),
  email VARCHAR(50) 
  )`

  connection.execute(creationQuery,(err)=>{
    if(err){
      console.error("Error creating table:",err);
      connection.end();
      return;
    }
    else{
      console.log("Table created successfully");
    }
  })


})

app.get("/",(req,res)=>{
  res.send("Hello World");
})

app.listen(3000,()=>{
  console.log("Server running")
})