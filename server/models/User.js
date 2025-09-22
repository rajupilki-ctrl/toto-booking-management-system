const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },   // full name of user
  email: { type: String, required: true, unique: true }, // must be unique
  password: { type: String, required: true }, // for login
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("User", userSchema);