import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import './App.css';
import About from './About';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="bbinco_no_Fondo.png" alt="Logo" style={{ height: "40px" }} />
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <a href="/contact">Contact</a>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <span>© {new Date().getFullYear()} Todos los derechos reservados de BBINCO</span>
    </footer>
  );
}

function Home() {
  return (
    <header className="App-header">
      <img src="bbinco.jpeg" className="App-logo" alt="logo" />
      <p>
BROADBAND INTEGRATION COMPANY 
      </p>
    
    </header>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;