import React from "react";

const totoImage =
  "https://cdn.motorfloor.com/vehicles/three-wheeler/sathi-toto-passenger-battery-rickshaw.jpg";

function HomePage() {
  return (
    <div className="container">
      {/* Hero Section */}
      <header className="hero">
        <div>
          <h1>Book Your Toto with Ease</h1>
          <p>
            The fastest, simplest way to register and book your electric Toto.
            Manage bookings, users, and more — all in one place.
          </p>
          <div className="hero-buttons">
            <a href="#" className="btn btn-primary">Get Started</a>
            <a href="#" className="btn btn-secondary">Learn More</a>
          </div>
        </div>
        <div>
          <img src={totoImage} alt="Toto" className="hero-image"/>
        </div>
      </header>

      {/* Features Section */}
      <section>
        <h2 className="text-center">How It Works</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>1. Register</h3>
            <p>Create your account in just a few clicks.</p>
          </div>
          <div className="feature-card">
            <h3>2. Book</h3>
            <p>Choose date, fare, and confirm your Toto booking.</p>
          </div>
          <div className="feature-card">
            <h3>3. Admin</h3>
            <p>Admins can manage users and bookings seamlessly.</p>
          </div>
          <div className="feature-card">
            <h3>4. Users</h3>
            <p>View all registered users in a structured list.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>Ready to Ride?</h2>
        <p>Start booking your Toto today and experience hassle-free travel.</p>
        <a href="#">Book Now</a>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} TotoBooking. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;