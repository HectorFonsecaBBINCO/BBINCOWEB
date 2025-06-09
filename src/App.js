import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import './App.css';
import About from './About';



function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar${scrolled ? " navbar-scrolled" : ""}`}>
      <div className="navbar-logo">
        <img src="bbinco_no_Fondo.png" alt="Logo" style={{ height: "40px" }} />
      </div>
      <div className="navbar-links">
        <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
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
    <main>
      <header className="App-header">
        <img src="bbinco.jpeg" className="App-logo" alt="logo" />
        <p>BROADBAND INTEGRATION COMPANY</p>
      </header>
      <section style={{ minHeight: "60vh", padding: "2rem", background: "#f5f5f5" }}>
        <h2>Sección 1</h2>
        <p>Contenido de la sección 1...</p>
      </section>
      <section style={{ minHeight: "60vh", padding: "2rem", background: "#e0e0e0" }}>
        <h2>Sección 2</h2>
        <p>Contenido de la sección 2...</p>
      </section>
      <section style={{ minHeight: "60vh", padding: "2rem", background: "#d0d0d0" }}>
        <h2>Sección 3</h2>
        <p>Contenido de la sección 3...</p>
      </section>
    </main>
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