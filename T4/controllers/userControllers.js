const { get } = require("../routes/userRoutes");
const db=require("../utils/db-connection")

const addUsers=(req,res)=>{
  // res.send("Add Entries function called ")
  const {name,email}=req.body;
  const inserQuery=`INSERT INTO Users(name,email) VALUES(?,?)`;


  db.execute(inserQuery,[name,email],(err)=>{
    if(err){
      console.error("Error inserting data:",err.message);
      res.status(500).send("Error inserting data");
      db.end();
      return; 
    }
    else{
      console.log("Data inserted successfully");
      res.status(200).send("Customer with name "+name+" added successfully");
    }
  })

}


const getUsers=(req,res)=>{
  const selectQuery=`SELECT * FROM Users`;  
  db.execute(selectQuery,(err,results)=>{
    if(err){
      console.error("Error fetching data:",err.message);
      res.status(500).send("Error fetching data");
      db.end();
      return; 
    } 
    else{
      console.log("Data fetched successfully");
      res.status(200).json(results);
    }
  })

}




const addBuses=(req,res)=>{
  // res.send("Add Entries function called ")
  const {name,total_seats,available_seats}=req.body;
  const inserQuery=`INSERT INTO Buses(name,total_seats,available_seats) VALUES(?,?,?)`;


  db.execute(inserQuery,[name,total_seats,available_seats],(err)=>{
    if(err){
      console.error("Error inserting data:",err.message);
      res.status(500).send("Error inserting data",err.message);
      db.end();
      return; 
    }
    else{
      console.log("Data inserted successfully");
      res.status(200).send("Bus with name "+name+" added successfully");
    }
  })

}



const getAvailableBuses=(req,res)=>{
  const {seats}=req.params;
  const selectQuery=`SELECT * FROM Buses WHERE available_seats>=?`;  
  db.execute(selectQuery,[seats],(err,results)=>{
    if(err){
      console.error("Error fetching data:",err.message);
      res.status(500).send("Error fetching data");
      db.end();
      return; 
    }
    else{
      console.log("Data fetched successfully");
      res.status(200).json(results);
    }
  })
}





module.exports={addUsers,getUsers,addBuses,getAvailableBuses};

