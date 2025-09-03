const express=require('express');
const router=express.Router();


const userControllers=require("../controllers/userControllers")

router.post("/user",userControllers.addUsers)

router.get("/user",userControllers.getUsers)


router.post("/bus",userControllers.addBuses)

router.get("/bus/available/:seats",userControllers.getAvailableBuses)

module.exports=router;

