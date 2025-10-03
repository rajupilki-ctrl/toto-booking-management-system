import React from "react";

const totoImage = 'https://cdn.motorfloor.com/vehicles/three-wheeler/sathi-toto-passenger-battery-rickshaw.jpg'
function HomePage() {
  return (
    <div class="container">
      <h1>Welcome to Online Toto Booking System</h1>

      {/* Toto Image */}
      <img src="https://cdn.motorfloor.com/vehicles/three-wheeler/sathi-toto-passenger-battery-rickshaw.jpg" alt="Toto" class="hero-image" />

      {/* Flow Section */}
      <h3>How It Works:</h3>
      <ol class="steps">
        <li>User goes to <b>Register Page</b> → creates an account.</li>
        <li>User goes to <b>Booking Page</b> → books Toto (with date, amount).</li>
        <li><b>Admin Page</b> → manage bookings and users (CRUD).</li>
        <li><b>Users Page</b> → show list of registered users.</li>
      </ol>
    </div>
  );
}

export default HomePage;