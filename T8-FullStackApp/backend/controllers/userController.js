const User = require("../models/User");

// Create user
const addUser = async (req, res) => {
  try {
    const { username, email, phone } = req.body;
    const user = await User.create({ username, email, phone });
    res.status(201).json(user);
  } catch (error) {
    console.error("Error inserting user:", error.message);
    res.status(500).json({ error: "Failed to add user" });
  }
};

// Get all users
const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error.message);
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

// Delete user
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await User.destroy({ where: { id } });
    res.json({ message: `User with id ${id} deleted` });
  } catch (error) {
    console.error("Error deleting user:", error.message);
    res.status(500).json({ error: "Failed to delete user" });
  }
};

module.exports = { addUser, getUsers, deleteUser };
