const express = require("express");
const { addUser, getUsers, deleteUser } = require("../controllers/userController");

const router = express.Router();

router.post("/users", addUser);
router.get("/users", getUsers);
router.delete("/users/:id", deleteUser);

module.exports = router;
