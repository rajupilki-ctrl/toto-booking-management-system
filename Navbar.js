import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">Toto Booking</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><Link className="nav-link" to="/register">Register</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/booking">Booking</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/users">Users</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/admin">Admin</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;