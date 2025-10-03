import React, { useState } from "react";

function BookingPage() {
  const [userId, setUserId] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");

  const handleBooking = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:3000/api/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, date, amount })
    });
    if (res.ok) {
      alert("✅ Booking Successful!");
      setUserId(""); setDate(""); setAmount("");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Book Toto</h2>

      <form onSubmit={handleBooking}>
        <input
          type="text"
          className="form-control"
          placeholder="Enter User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
        />

        <input
          type="date"
          className="form-control"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <input
          type="number"
          className="form-control"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />

        <button className="btn-success w-100" type="submit">
          Book Now
        </button>
      </form>
    </div>

  );
}

export default BookingPage;