const express=require('express');
const router=express.Router();
const studentController=require("../controller/studentController")


router.post("/add",studentController.addEntries)

module.exports=router;