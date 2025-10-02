import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [farmers, setFarmers] = useState(0);
  const [food, setFood] = useState(0);
  const [ngos, setNgos] = useState(0);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  useEffect(() => {
    const animateCounter = (setter, target, duration) => {
      let start = 0;
      const increment = target / (duration / 50);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.floor(start));
        }
      }, 50);
    };

    animateCounter(setFarmers, 10000, 2000);
    animateCounter(setFood, 50000, 2000);
    animateCounter(setNgos, 200, 2000);
  }, []);

  return (
    <div className="App">
      <header className="header">
        <nav className="nav">
          <div className="logo">AgriSure 🌱</div>
          <button className="dark-mode-toggle" onClick={toggleDarkMode}>
            {darkMode ? '🌙' : '☀️'}
          </button>
        </nav>
      </header>

      <section id="hero" className="hero">
        <div className="floating-icons">
          <span className="icon">🤖</span>
          <span className="icon">🔗</span>
          <span className="icon">🌾</span>
        </div>
        <div className="hero-content">
          <h1>Securing Farmers' Futures with AI + Blockchain</h1>
          <p>Smarter predictions, fair pricing, and zero food waste — all powered by technology.</p>
          <div className="hero-illustration">
            {/* Placeholder for illustration */}
            <svg width="300" height="200" viewBox="0 0 300 200">
              <circle cx="150" cy="100" r="50" fill="#4CAF50" />
              <text x="150" y="110" textAnchor="middle" fill="white">AI + Blockchain</text>
            </svg>
          </div>
          <div className="cta-buttons">
            <button className="btn primary">Get Started</button>
            <button className="btn secondary">Learn More</button>
          </div>
        </div>
      </section>

      {/* Placeholder for other sections */}
      <section id="features" className="features">
        <h2>Key Features</h2>
        <div className="feature-cards">
          <div className="card">
            <h3>🤖 AI Predictions</h3>
            <p>Predict crop yield and fair prices for smarter decision-making.</p>
          </div>
          <div className="card">
            <h3>🔗 Blockchain Payments</h3>
            <p>Enable transparent, instant transactions between farmers and buyers.</p>
          </div>
          <div className="card">
            <h3>🚚 Zero Waste Network</h3>
            <p>Redirect surplus produce to NGOs and food banks.</p>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="how-it-works">
        <h2>How It Works</h2>
        <div className="timeline">
          <div className="step">
            <span className="step-number">1</span>
            <h3>Predict</h3>
            <p>Use AI to forecast yields and prices.</p>
          </div>
          <div className="step">
            <span className="step-number">2</span>
            <h3>Connect</h3>
            <p>Link farmers with buyers via blockchain.</p>
          </div>
          <div className="step">
            <span className="step-number">3</span>
            <h3>Distribute</h3>
            <p>Deliver surplus to those in need.</p>
          </div>
        </div>
      </section>

      <section id="impact" className="impact">
        <h2>Our Impact</h2>
        <div className="stats">
          <div className="stat">
            <h3>{farmers.toLocaleString()}+</h3>
            <p>Farmers Empowered</p>
          </div>
          <div className="stat">
            <h3>{food.toLocaleString()} Tons</h3>
            <p>Food Saved</p>
          </div>
          <div className="stat">
            <h3>{ngos}+</h3>
            <p>NGOs Partnered</p>
          </div>
        </div>
      </section>

      <section id="testimonials" className="testimonials">
        <h2>Farmers' Stories</h2>
        <div className="testimonial-cards">
          <div className="testimonial">
            <p>"AgriSure helped me get fair prices for my crops!"</p>
            <cite>- Farmer John</cite>
          </div>
          <div className="testimonial">
            <p>"Zero waste means more food for communities."</p>
            <cite>- NGO Partner</cite>
          </div>
        </div>
      </section>

      <footer id="footer" className="footer">
        <h2>Join the AgriSure Revolution 🌾</h2>
        <button className="btn primary">Sign Up Now</button>
        <div className="social-links">
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
