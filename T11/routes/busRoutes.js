const express = require("express");
const router = express.Router();
const busController = require("../controllers/busController");

router.post("/buses", busController.createBus);

module.exports = router;
