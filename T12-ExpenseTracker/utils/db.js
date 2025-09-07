const { Sequelize } = require("sequelize");


const sequelize = new Sequelize("expense01", "root", "Admin@123", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
