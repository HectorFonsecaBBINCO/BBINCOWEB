import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
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
        <img src="bbinco_no_Fondo.png" alt="Logo" style={{ height: "100px"}} />
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
      <header
        className="App-hero"
        style={{
          minHeight: "70vh",
          background: "linear-gradient(135deg, #007bff 0%, #151566  100%, #000  100%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          textAlign: "center",
          padding: "0 2rem",
          boxShadow: "0 4px 24px rgba(0,0,0,0.08)"
        }}
      >
        <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "1rem", letterSpacing: "2px" }}>
          BROADBAND INTEGRATION COMPANY
        </h1>
        <h2 style={{ fontSize: "1.7rem", fontWeight: "400", marginBottom: "2rem", opacity: 0.95 }}>
          Soluciones en telecomunicaciones, innovación y tecnología
        </h2>
        <a
          href="#contacto"
          style={{
            background: "rgba(255,255,255,0.15)",
            color: "#fff",
            padding: "1rem 2.5rem",
            borderRadius: "30px",
            fontSize: "1.2rem",
            textDecoration: "none",
            fontWeight: "bold",
            boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
            border: "2px solid #fff",
            transition: "background 0.2s, color 0.2s"
          }}
          onMouseOver={e => {
            e.target.style.background = "#fff";
            e.target.style.color = "#007bff";
          }}
          onMouseOut={e => {
            e.target.style.background = "rgba(255,255,255,0.15)";
            e.target.style.color = "#fff";
          }}
        >
          Contáctanos
        </a>
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