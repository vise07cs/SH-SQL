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
  // Create a sample table if it doesn't exist
  const createUsers=`create table Users(
  id INT PRIMARY KEY AUTO_INCREMENT, 
  name VARCHAR(50),
  email VARCHAR(50) 
  )`

  connection.execute(createUsers,(err)=>{
    if(err){
      console.error("Error creating table:",err);
      connection.end();
      return;
    }
    else{
      console.log("Table Users created successfully");
    }
  })



  const createBuses=`create table Buses(
  id INT PRIMARY KEY AUTO_INCREMENT,
  bus_number VARCHAR(50), 
  total_seats INT(3),
  available_seats INT(3)
  )`

  connection.execute(createBuses,(err)=>{
    if(err){
      console.error("Error creating table:",err);
      connection.end();
      return;
    }
    else{
      console.log("Table Buses created successfully");
    }
  })


  const createBookings=`create table Bookings(
  id INT PRIMARY KEY AUTO_INCREMENT,
  seat_no INT(3)
  )`

  connection.execute(createBookings,(err)=>{
    if(err){
      console.error("Error creating table:",err);
      connection.end();
      return;
    }
    else{
      console.log("Table Bookings created successfully");
    }
  })



  const createPayments=`create table Payments(
  id INT PRIMARY KEY AUTO_INCREMENT,
  amount INT(10),
  payment_date DATE,
  payment_status VARCHAR(20)
  )`

  connection.execute(createPayments,(err)=>{
    if(err){
      console.error("Error creating table:",err);
      connection.end();
      return;
    }
    else{
      console.log("Table Payments created successfully");
    }
  })


})



app.listen(3001,()=>{
  console.log("Server running on port 3001")
})