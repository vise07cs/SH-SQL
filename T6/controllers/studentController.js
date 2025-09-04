const db=require("../utils/db-connection")


const addStudents=(req,res)=>{
  // res.send("Add Entries function called ")
  const {name,email,age}=req.body;
  const inserQuery=`INSERT INTO Students(name,email,age) VALUES(?,?,?)`;


  db.execute(inserQuery,[name,email,age],(err)=>{
    if(err){
      console.error("Error inserting data:",err.message);
      res.status(500).send("Error inserting data");
      db.end();
      return; 
    }
    else{
      console.log("Data inserted successfully");
      res.status(200).send("Student with name "+name+" added successfully");
    }
  })

}

const getStudents=(req,res)=>{
  const selectQuery=`SELECT * FROM Students`;  
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


const getStudentById=(req,res)=>{
  const {id}=req.params;
  const selectQuery=`SELECT * FROM Students WHERE id=?`;
  db.execute(selectQuery,[id],(err,results)=>{
    if(err){
      console.error("Error fetching data:",err.message);  
      res.status(500).send("Error fetching data");
      db.end();
      return; 
    }
    else{
      console.log(`Data of Student with ${id} fetched successfully`);
      res.status(200).json(results);
    }
  })
}



const updateStudentById=(req,res)=>{
  const {id}=req.params;
  const {name,email,age}=req.body;
  const updateQuery=`UPDATE Students SET name=?, email=?, age=? WHERE id=?`;
  db.execute(updateQuery,[name,email,age,id],(err)=>{
    if(err){
      console.error("Error updating data:",err.message);
      res.status(500).send("Error updating data");
      db.end();
      return; 
    }
    else{
      console.log(`Data of Student with ${id} updated successfully`);
      res.status(200).send(`Student with id ${id} updated successfully`);
    }
  })
}

const deleteStudentById=(req,res)=>{
  const {id}=req.params;
  const deleteQuery=`DELETE FROM Students WHERE id=?`;
  db.execute(deleteQuery,[id],(err)=>{
    if(err){
      console.error("Error deleting data:",err.message);
      res.status(500).send("Error deleting data");
      db.end();
      return; 
    }
    else{
      console.log(`Data of Student with ${id} deleted successfully`);
      res.status(200).send(`Student with id ${id} deleted successfully`);
    }
  })
}




module.exports={addStudents,getStudents,getStudentById,updateStudentById,deleteStudentById};


