const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // who booked
  totoNumber: { type: Number, required: true },
  bookingDate: { type: Date, default: Date.now },
  amount:{type: Number, required: true}
});

module.exports = mongoose.model("Booking", bookingSchema);