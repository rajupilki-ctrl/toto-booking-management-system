import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">Toto Booking</Link>
      <ul className="navbar-nav">
        <li><Link to="/register" className="nav-link">Register</Link></li>
        <li><Link to="/booking" className="nav-link">Booking</Link></li>
        <li><Link to="/users" className="nav-link">Users</Link></li>
        <li><Link to="/admin" className="nav-link">Admin</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;