const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/bookingController");

router.post("/bookings", bookingController.createBooking);
router.get("/users/:id/bookings", bookingController.getUserBookings);
router.get("/buses/:id/bookings", bookingController.getBusBookings);

module.exports = router;
