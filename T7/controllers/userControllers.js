// const db=require("../utils/db-connection")
const Users=require("../model/users");
const Buses=require("../model/buses");
const { Op } = require("sequelize");

const { get } = require("../routes/userRoutes");

const addUsers=async(req,res)=>{

  try {
    const {name,email,age}=req.body;
    const users=await Users.create({
      
      name,
      email,
      age
      
    
    });
    res.status(200).send("Student with name "+name+" added successfully");
    
  } catch (error) {
    
    console.error("Error inserting data:",error.message);
    res.status(500).send("Error inserting data");
    // db.end();
    // return;
  }


}

const getUsers=async(req,res)=>{
  try {
    const users=await Users.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching data:",error.message);
    res.status(500).send("Error fetching data");
    // db.end();
    // return; 
  }
}



const addBus=async(req,res)=>{

  try {
    const {name,total_seats,available_seats}=req.body;
    const buses=await Buses.create({
      
      name,
      total_seats,
      available_seats
      
    
    });
    res.status(200).send("Bus with name "+name+" added successfully");
    
  } catch (error) {
    
    console.error("Error inserting data:",error.message);
    res.status(500).send("Error inserting data");
    // db.end();
    // return;s
  }


}



const getAvailableBuses=async(req,res)=>{
  try {
    const {seats}=req.params;
    const buses=await Buses.findAll({where:{available_seats:{[Op.gt]: seats}}});
    res.status(200).json(buses);
  } catch (error) {
    console.error("Error fetching data:",error.message);
    res.status(500).send("Error fetching data");
    // db.end();
    // return; 
  }
}


// const updateStudentById=async(req,res)=>{
//   try {
//     const {id}=req.params;
//     const {name,email}=req.body;
//     const result=await Student.update({name,email},{where:{id:id}});
//     if(result[0]===0){
//       res.status(404).send(`Student with id ${id} not found`);
//       return;
//     }
//     res.status(200).send(`Student with id ${id} updated successfully`);
//   } catch (error) {
//     console.error("Error updating data:",error.message);
//     res.status(500).send("Error updating data");
//     // db.end();
//     // return; 
//   }
// }



// const deleteStudentById=async(req,res)=>{
//   try {
//     const {id}=req.params;
//     const result=await Student.destroy({where:{id:id}});
//     if(result===0){
//       res.status(404).send(`Student with id ${id} not found`);
//       return;
//     }
//     res.status(200).send(`Student with id ${id} deleted successfully`);
//   } catch (error) {
//     console.error("Error deleting data:",error.message);
//     res.status(500).send("Error deleting data");
//     // db.end();
//     // return; 
//   } 
// }




module.exports={addUsers,getUsers,addBus,getAvailableBuses};