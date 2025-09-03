const express=require('express');
const router=express.Router();
const studentController=require("../controller/studentController")


router.post("/add",studentController.addEntries)

router.put("/update/:id",studentController.updateEntries)

module.exports=router;