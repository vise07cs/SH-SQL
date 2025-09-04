const express=require("express")
const mysql=require("mysql2")
const app=express()

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
})


// Students Table

 // Create a sample table if it doesn't exist
  const createStudents=`create table IF NOT EXISTS Students(
  id INT PRIMARY KEY AUTO_INCREMENT, 
  name VARCHAR(50),
  email VARCHAR(50),
  age INT(3) 
  )`

  connection.execute(createStudents,(err)=>{
    if(err){
      console.error("Error creating table:",err);
      connection.end();
      return;
    }
    else{
      console.log("Table Students created successfully");
    }
  })



module.exports=connection;