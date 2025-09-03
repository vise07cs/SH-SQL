const db=require("../utils/dbConnection")


const addEntries=(req,res)=>{
  // res.send("Add Entries function called ")
  const {name,email}=req.body;
  const inserQuery=`INSERT INTO students(name,email) VALUES(?,?)`;


  db.execute(inserQuery,[name,email],(err)=>{
    if(err){
      console.error("Error inserting data:",err.message);
      res.status(500).send("Error inserting data");
      // connection.end();
      return; 
    }
    else{
      console.log("Data inserted successfully");
      res.status(200).send("Student wiht name "+name+" added successfully");
    }
  })

}


module.exports={addEntries};