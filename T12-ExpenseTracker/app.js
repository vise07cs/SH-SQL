const express = require("express");
const sequelize = require("./utils/db");
const expenseRoutes = require("./routes/expenseRoutes");
const cors = require("cors");

const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.static("public")); // serve index.html + index.js

app.use("/api", expenseRoutes);

// Sync DB & start server
sequelize.sync().then(() => {
  console.log("✅ Database synced");
  app.listen(3004, () => console.log("🚀 Server running on port 3004"));
});
