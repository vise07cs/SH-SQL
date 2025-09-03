const e = require("express");
const db=require("../utils/dbConnection")


const addEntries=(req,res)=>{
  // res.send("Add Entries function called ")
  const {name,email}=req.body;
  const inserQuery=`INSERT INTO students(name,email) VALUES(?,?)`;


  db.execute(inserQuery,[name,email],(err)=>{
    if(err){
      console.error("Error inserting data:",err.message);
      res.status(500).send("Error inserting data");
      db.end();
      return; 
    }
    else{
      console.log("Data inserted successfully");
      res.status(200).send("Student wiht name "+name+" added successfully");
    }
  })

}




const updateEntries=(req,res)=>{
  const {id}=req.params;
  const {name}=req.body;

  const updateQuery=`UPDATE students SET name=? WHERE id=?`;
  db.execute(updateQuery,[name,id],(err,result)=>{
    if(err){
      console.log("Error updating data:",err.message);
      res.status(500).send("Error updating data");
      db.end();
      return;
    }

    if(result.affectedRows===0){
      res.status(404).send("Student not found");
    }
    else{
      console.log("Data updated successfully");
      res.status(200).send("Student with id "+id+" updated successfully");
    }

  })
}


module.exports={addEntries,updateEntries};