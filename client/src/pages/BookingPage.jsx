import React, { useState, useEffect } from "react";

function BookingPage() {
  const [user, setUser] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [amount, setAmount] = useState("");
  const [totoNumber, setTotoNumber] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("http://localhost:5800/api/users");
      const data = await res.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  const handleBooking = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5800/api/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user, bookingDate, amount, totoNumber })
    });
    if (res.ok) {
      alert("✅ Booking Successful!");
      setUser(""); setBookingDate(""); setAmount(""); setTotoNumber("");
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2 className="text-center">Book Toto</h2>
        <form onSubmit={handleBooking}>
          <select
            className="form-control"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            required
          >
            <option value="">Select User</option>
            {users.map(user => (
              <option key={user._id} value={user._id}>{user.name}</option>
            ))}
          </select>

          <input
            type="date"
            className="form-control"
            value={bookingDate}
            onChange={(e) => setBookingDate(e.target.value)}
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

          <input
            type="number"
            className="form-control"
            placeholder="Enter Toto Number"
            value={totoNumber}
            onChange={(e) => setTotoNumber(e.target.value)}
            required
          />

          <button className="btn btn-primary w-100" type="submit">
            Book Now
          </button>
        </form>
      </div>
    </div>

  );
}

export default BookingPage;