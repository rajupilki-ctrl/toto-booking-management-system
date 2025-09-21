const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/bookingControllers");

// POST → create booking
router.post("/", bookingController.createBooking);

// GET → get all bookings
router.get("/", bookingController.getBooking);
router.get("/:id", bookingController.getBookingById);

router.put("/:id", bookingController.updateBooking);

router.delete("/:id", bookingController.deleteBooking);


module.exports = router;