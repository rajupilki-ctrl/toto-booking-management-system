import React, { useEffect, useState } from "react";

function AdminPage() {
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    const res = await fetch("http://localhost:5800/api/bookings");
    const data = await res.json();
    setBookings(data);
  };

  const deleteBooking = async (id) => {
    await fetch(`http://localhost:5800/api/bookings/${id}`, { method: "DELETE" });
    fetchBookings();
  };

  useEffect(() => { fetchBookings(); }, []);

  return (
    <div className="container">
      <h2 className="text-center">Admin Panel - Manage Bookings</h2>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>User</th>
            <th>Date</th>
            <th>Toto Number</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map(b => (
            <tr key={b._id}>
              <td>{b._id}</td>
              <td>{b.user.name}</td>
              <td>{new Date(b.bookingDate).toLocaleDateString()}</td>
              <td>{b.totoNumber}</td>
              <td>{b.amount}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteBooking(b._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  );
}

export default AdminPage;