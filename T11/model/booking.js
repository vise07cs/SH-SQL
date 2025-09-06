const { DataTypes } = require("sequelize");
const sequelize = require("../utils/db");
const User = require("./user");
const Bus = require("./bus");

const Booking = sequelize.define("Booking", {
  seatNumber: { type: DataTypes.INTEGER, allowNull: false },
});

// Associations with explicit foreign keys
User.hasMany(Booking, { foreignKey: "userId" });
Booking.belongsTo(User, { foreignKey: "userId" });

Bus.hasMany(Booking, { foreignKey: "busId" });
Booking.belongsTo(Bus, { foreignKey: "busId" });

module.exports = Booking;
