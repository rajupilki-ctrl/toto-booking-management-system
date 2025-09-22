// 1) Import mongoose library
const mongoose = require("mongoose");

// 2) Function to connect MongoDB
const connectDB = async () => {
  try {
    // 3) Connect to MongoDB (local)
    await mongoose.connect("mongodb://127.0.0.1:27017/toto_booking");
     
    // 4) If success
    console.log("MongoDB connected successfully");
  } catch (error) {
    // 5) If fail
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

// 6) Export function
module.exports = connectDB;