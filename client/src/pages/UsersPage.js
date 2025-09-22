import React, { useEffect, useState } from "react";

function UsersPage() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const res = await fetch("http://localhost:3000/api/users");
    const data = await res.json();
    setUsers(data);
  };

  const deleteUser = async (id) => {
    await fetch('http://localhost:3000/api/users/${id}', { method: "DELETE" });
    fetchUsers();
  };

  useEffect(() => { fetchUsers(); }, []);

  return (
    <div className="container mt-4">
      <h2>Registered Users</h2>
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr><th>ID</th><th>Name</th><th>Email</th><th>Action</th></tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u._id}>
              <td>{u._id}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>
                <button className="btn btn-danger btn-sm" onClick={() => deleteUser(u._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UsersPage;