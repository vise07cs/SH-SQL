const Course=require("../model/courses");
const Student=require("../model/students");



const Courses=require("../model/courses");

const addCourse=async(req,res,next)=>{
    try {
      const { name} = req.body;
      const course = await Courses.create({ "name":name });
      res.status(201).json(course);

    } catch (error) {
      console.error("Error inserting course:", error.message);
      res.status(500).json({ error: "Failed to add course" });
    } 
  };

const addStudentsToCourse=async(req,res,next)=>{  
    try {
     const {studentId,courseId}=req.body;
     const student=await Student.findByPk(studentId);
      const course=await Course.findAll({
        where:{
          id:courseId
        }
      })
      await student.addCourse(course);
      const updatedStudent=await Student.findByPk(studentId,{
        include:Course
      })
      res.status(200).json(updatedStudent);

    } catch (error) {
      console.error("Error inserting course:", error.message);
      res.status(500).json({ error: "Failed to add course" });

    
    } 
  };





  module.exports={addCourse,addStudentsToCourse};