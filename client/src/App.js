import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import './App.css';
import logo from './assets/background.jpg.jpg';
import About from './About';
import Contact from './Contact';
import Services from './Services';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="hero-container">
      <header className="navbar">
        <div className="logo">
          <img src={logo} alt="InfraDAO Logo" className="logo-img" />
        </div>
        <nav>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <main className="hero-content">
        <h1>
          Welcome to <span className="green-text">InfraDAO</span>
        </h1>
        <p>A new era of decentralized infrastructure.</p>
        <div className="hero-buttons">
          <button className="btn green" onClick={() => navigate('/about')}>
            Learn More
          </button>
          <button className="btn dark" onClick={() => navigate('/contact')}>
            Get in Touch
          </button>
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;










