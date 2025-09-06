const express = require("express");
const sequelize = require("./utils/db");

// Load models (important for associations)
const User = require("./model/user");
const Bus = require("./model/bus");
const Booking = require("./model/booking");

const userRoutes = require("./routes/userRoutes");
const busRoutes = require("./routes/busRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

const app = express();
app.use(express.json());

app.use(userRoutes);
app.use(busRoutes);
app.use(bookingRoutes);

// Sync DB
sequelize.sync({ force: false }).then(() => {
  console.log("✅ Database synced");
  app.listen(3004, () => console.log("🚀 Server running on port 3004"));
});
