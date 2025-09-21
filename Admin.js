const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true }, // admin login name
  password: { type: String, required: true }, // hashed password
  email:{type: String, required: true, unique: true},
  role: { type: String, default: "admin" }, // fixed role
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Admin", adminSchema);