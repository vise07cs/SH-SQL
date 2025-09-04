const express=require('express');
const router=express.Router();
const studentController=require("../controllers/studentController")

router.post("/students",studentController.addStudents);
router.get("/students",studentController.getStudents);
router.get("/students/:id",studentController.getStudentById);
router.put("/students/:id",studentController.updateStudentById);
router.delete("/students/:id",studentController.deleteStudentById);

module.exports=router;