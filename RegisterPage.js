import React, { useState } from "react";

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:3000/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email })
    });
    if (res.ok) {
      alert("✅ User Registered Successfully!");
      setName("");
      setEmail("");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Register User</h2>
      <form onSubmit={handleSubmit} className="col-md-6 mx-auto">
        <input 
          type="text" className="form-control mb-3"
          placeholder="Enter Name"
          value={name} onChange={(e) => setName(e.target.value)} required
        />
        <input 
          type="email" className="form-control mb-3"
          placeholder="Enter Email"
          value={email} onChange={(e) => setEmail(e.target.value)} required
        />
        <button className="btn btn-primary w-100" type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterPage;