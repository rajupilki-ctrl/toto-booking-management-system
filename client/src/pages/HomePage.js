import React from "react";


function HomePage() {
  return (
    <div className="container text-center mt-4">
      <h1 className="mb-4">Welcome to Online Toto Booking System</h1>
      
      {/* Toto Image */}
      <img 
        src={totoImage} 
        alt="Toto" 
        className="img-fluid rounded shadow mb-4"
        style={{ maxWidth: "500px" }}
      />

      {/* Flow */}
      <h3>How It Works:</h3>
      <ol className="text-start mx-auto" style={{ maxWidth: "400px" }}>
        <li>User goes to <b>Register Page</b> → creates an account.</li>
        <li>User goes to <b>Booking Page</b> → books Toto (with date, amount).</li>
        <li><b>Admin Page</b> → manage bookings and users (CRUD).</li>
        <li><b>Users Page</b> → show list of registered users.</li>
      </ol>
    </div>
  );
}

export default HomePage;