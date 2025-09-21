// 1) Import express library
const express = require("express");

const connectDB = require("./config/db.js");
//import routes
const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

// 2) Create express app
const app = express();

// 3) Define port number
const PORT = 3000;

// 4) Middleware to parse JSON data
app.use(express.json());

//connect Mongodb
connectDB();

// 5) Create a simple route for testing
app.get("/", (req, res) => {
  res.send("Server + Mongodb +Models + Controllers + Routes is running successfully");
}); 
//use Routes
app.use("/api/users", userRoutes);
app.use("/api/admins", adminRoutes);
app.use("/api/bookings", bookingRoutes);


// 6) Start the server
app.listen(PORT, () => {
  console.log('Server running on http://localhost:${PORT}');
});