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
  const {name,email}=req.body;

  const updateQuery=`UPDATE students SET name=? , email=? WHERE id=?`;
  db.execute(updateQuery,[name,email,id],(err,result)=>{
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



const deleteEntries=(req,res)=>{
  const {id}=req.params;
  const deleteQuery=`DELETE FROM students WHERE id=?`;
  db.execute(deleteQuery,[id],(err,result)=>{
    if(err){
      console.error("Error deleting data:",err.message);
      res.status(500).send("Error deleting data");
      db.end();
      return;
    }
    else if(result.affectedRows===0){
      res.status(404).send("Student not found");
      return;
    }

    else{
      console.log("Data deleted successfully");
      res.status(200).send("Student with id "+id+" deleted successfully");
    }
  })
}

module.exports={addEntries,updateEntries,deleteEntries};