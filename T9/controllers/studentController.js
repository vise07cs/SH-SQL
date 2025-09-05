// const db=require("../utils/db-connection")
const Student=require("../model/students");
const { get } = require("../routes/studentsRoute");
const IdCard=require("../model/idcard");

const addStudents=async(req,res)=>{

  try {
    const {name,email}=req.body;
    const student=await Student.create({
      
      name,
      email
      
    
    });
    res.status(200).send("Student with name "+name+" added successfully");
    
  } catch (error) {
    
    console.error("Error inserting data:",error.message);
    res.status(500).send("Error inserting data");
    // db.end();
    // return;
  }


}

const addValuesToStudentsAndIdCard=async(req,res)=>{
  try{
    const student= await Student.create(req.body.students);
    const idcard=IdCard.create({
      ...req.body.Idcard,
      StudentId:student.id

    });
    
    res.status(200).send("Student and IdCard added successfully");
    res.json({student,idcard});
  }
  catch(error){
      res.status(500).send("Error inserting data");
      console.error("Error inserting data:",error.message);
      // db.end();
      // return;


  }
}



const getStudents=async(req,res)=>{
  try {
    const students=await Student.findAll();
    res.status(200).json(students);
  } catch (error) {
    console.error("Error fetching data:",error.message);
    res.status(500).send("Error fetching data");
    // db.end();
    // return; 
  }
}


const updateStudentById=async(req,res)=>{
  try {
    const {id}=req.params;
    const {name,email}=req.body;
    const result=await Student.update({name,email},{where:{id:id}});
    if(result[0]===0){
      res.status(404).send(`Student with id ${id} not found`);
      return;
    }
    res.status(200).send(`Student with id ${id} updated successfully`);
  } catch (error) {
    console.error("Error updating data:",error.message);
    res.status(500).send("Error updating data");
    // db.end();
    // return; 
  }
}



const deleteStudentById=async(req,res)=>{
  try {
    const {id}=req.params;
    const result=await Student.destroy({where:{id:id}});
    if(result===0){
      res.status(404).send(`Student with id ${id} not found`);
      return;
    }
    res.status(200).send(`Student with id ${id} deleted successfully`);
  } catch (error) {
    console.error("Error deleting data:",error.message);
    res.status(500).send("Error deleting data");
    // db.end();
    // return; 
  } 
}




module.exports={addStudents,getStudents,updateStudentById,deleteStudentById,addValuesToStudentsAndIdCard};



//   const inserQuery=`INSERT INTO Students(name,email,age) VALUES(?,?,?)`;


//   db.execute(inserQuery,[name,email,age],(err)=>{
//     if(err){
//       console.error("Error inserting data:",err.message);
//       res.status(500).send("Error inserting data");
//       db.end();
//       return; 
//     }
//     else{
//       console.log("Data inserted successfully");
//       res.status(200).send("Student with name "+name+" added successfully");
//     }
//   })

// }

// const getStudents=(req,res)=>{
//   const selectQuery=`SELECT * FROM Students`;  
//   db.execute(selectQuery,(err,results)=>{
//     if(err){
//       console.error("Error fetching data:",err.message);
//       res.status(500).send("Error fetching data");
//       db.end();
//       return; 
//     } 
//     else{
//       console.log("Data fetched successfully");
//       res.status(200).json(results);
//     }
//   })

// }


// const getStudentById=(req,res)=>{
//   const {id}=req.params;
//   const selectQuery=`SELECT * FROM Students WHERE id=?`;
//   db.execute(selectQuery,[id],(err,results)=>{
//     if(err){
//       console.error("Error fetching data:",err.message);  
//       res.status(500).send("Error fetching data");
//       db.end();
//       return; 
//     }
//     else{
//       console.log(`Data of Student with ${id} fetched successfully`);
//       res.status(200).json(results);
//     }
//   })
// }



// const updateStudentById=(req,res)=>{
//   const {id}=req.params;
//   const {name,email,age}=req.body;
//   const updateQuery=`UPDATE Students SET name=?, email=?, age=? WHERE id=?`;
//   db.execute(updateQuery,[name,email,age,id],(err)=>{
//     if(err){
//       console.error("Error updating data:",err.message);
//       res.status(500).send("Error updating data");
//       db.end();
//       return; 
//     }
//     else{
//       console.log(`Data of Student with ${id} updated successfully`);
//       res.status(200).send(`Student with id ${id} updated successfully`);
//     }
//   })
// }

// const deleteStudentById=(req,res)=>{
//   const {id}=req.params;
//   const deleteQuery=`DELETE FROM Students WHERE id=?`;
//   db.execute(deleteQuery,[id],(err)=>{
//     if(err){
//       console.error("Error deleting data:",err.message);
//       res.status(500).send("Error deleting data");
//       db.end();
//       return; 
//     }
//     else{
//       console.log(`Data of Student with ${id} deleted successfully`);
//       res.status(200).send(`Student with id ${id} deleted successfully`);
//     }
//   })
// }






