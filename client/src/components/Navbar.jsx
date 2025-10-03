import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav class="navbar">
  <a href="/" class="navbar-brand">Toto Booking</a>

  {/* Mobile Menu Button */}
  <span class="menu-toggle" onclick="document.querySelector('.navbar-nav').classList.toggle('active')">
    ☰
  </span>

  <ul class="navbar-nav">
    <li class="nav-item"><a class="nav-link" href="/register">Register</a></li>
    <li class="nav-item"><a class="nav-link" href="/booking">Booking</a></li>
    <li class="nav-item"><a class="nav-link" href="/users">Users</a></li>
    <li class="nav-item"><a class="nav-link" href="/admin">Admin</a></li>
  </ul>
</nav>

  );
}

export default Navbar;