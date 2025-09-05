const express = require("express");
const cors = require("cors");
const db = require("./utils/db-connection");
const userRoutes = require("./routes/userRoutes");
const User = require("./models/User");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", userRoutes);

db.sync().then(() => {
  app.listen(3007, () => console.log("✅ Server running on port 3000"));
});
// User.sync(); // Ensure the User model is synced with the database