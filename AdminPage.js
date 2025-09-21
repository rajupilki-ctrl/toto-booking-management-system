import React, { useEffect, useState } from "react";

function AdminPage() {
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    const res = await fetch("http://localhost:3000/api/bookings");
    const data = await res.json();
    setBookings(data);
  };

  const deleteBooking = async (id) => {
    await fetch('http://localhost:3000/api/bookings/${id}', { method: "DELETE" });
    fetchBookings();
  };

  useEffect(() => { fetchBookings(); }, []);

  return (
    <div className="container mt-4">
      <h2>Admin Panel - Manage Bookings</h2>
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr><th>ID</th><th>User</th><th>Date</th><th>Amount</th><th>Action</th></tr>
        </thead>
        <tbody>
          {bookings.map(b => (
            <tr key={b._id}>
              <td>{b._id}</td>
              <td>{b.userId}</td>
              <td>{b.date}</td>
              <td>{b.amount}</td>
              <td>
                <button className="btn btn-danger btn-sm" onClick={() => deleteBooking(b._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminPage;