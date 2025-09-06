const Booking = require("../model/booking");
const User = require("../model/user");
const Bus = require("../model/bus");

const createBooking = async (req, res) => {
  try {
    const { userId, busId, seatNumber } = req.body;
    const booking = await Booking.create({ userId, busId, seatNumber });
    res.status(201).json(booking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all bookings of a user (with bus details)
const getUserBookings = async (req, res) => {
  try {
    const bookings = await Booking.findAll({
      where: { userId: req.params.id },
      include: [{ model: Bus, attributes: ["busNumber"] }],
    });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all bookings of a bus (with user details)
const getBusBookings = async (req, res) => {
  try {
    const bookings = await Booking.findAll({
      where: { busId: req.params.id },
      include: [{ model: User, attributes: ["name", "email"] }],
    });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 module.exports = {
  createBooking,
  getUserBookings,
  getBusBookings,
};