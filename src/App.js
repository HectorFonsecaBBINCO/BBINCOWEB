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
  // ...existing code...
<nav className={`navbar${scrolled ? " navbar-scrolled" : ""}`}>
 
  <div className="navbar-links">
    <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
    <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
    <a href="/contact">Contact</a>
  </div>
</nav>
// ...existing code...
 
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
  <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>Proyectos realizados</h2>
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
      gap: "2rem",
      maxWidth: "1100px",
      margin: "0 auto"
    }}
  >
    {[
      { img: "/Hoteles/Waldorf.jpg", title: "Waldorf", desc: "Redes y automatización" },
      { img: "/Hoteles/Four Seasons.jpg", title: "Four Seasons", desc: "Domótica y seguridad" },
      { img: "/Hoteles/Rosewood.jpg", title: "Rosewood", desc: "Infraestructura TI" },
      { img: "/Hoteles/Chileno.jpg", title: "Chileno", desc: "WiFi y control de acceso" },
      // Agrega más proyectos si lo deseas
    ].map((proy, idx) => (
      <div
        key={idx}

        style={{
          background: "#fff",
          borderRadius: "14px",
          boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
          overflow: "hidden",
          position: "relative",
          transition: "transform 0.2s, box-shadow 0.2s",
          cursor: "pointer"
        }}
        onMouseOver={e => {
          e.currentTarget.style.transform = "translateY(-8px) scale(1.03)";
          e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.16)";
        }}
        onMouseOut={e => {
          e.currentTarget.style.transform = "none";
          e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.08)";
        }}
      >
        <img
          src={proy.img}
          alt={proy.title}
          style={{
            width: "100%",
            height: "180px",
            objectFit: "cover",
            display: "block"
          }}
        />
        <div style={{ padding: "1.2rem" }}>
          <h3 style={{ margin: "0 0 0.5rem 0", fontWeight: "bold" }}>{proy.title}</h3>
          <p style={{ margin: "0 0 1rem 0", color: "#444" }}>{proy.desc}</p>
          <button
            style={{
              background: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "20px",
              padding: "0.5rem 1.5rem",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "background 0.2s"
            }}
            onMouseOver={e => e.target.style.background = "#0056b3"}
            onMouseOut={e => e.target.style.background = "#007bff"}
            onClick={() => alert("Aquí puedes mostrar más información del proyecto")}
          >
            Saber más
          </button>
        </div>
      </div>
    ))}
  </div>
</section>

   <section
  style={{
    minHeight: "60vh",
    padding: "2rem",
    position: "relative",
    overflow: "hidden",
    background: "#181c2a",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }}
>
  {/* Fondo animado tipo circuito */}
  <div style={{
    position: "absolute",
    inset: 0,
    zIndex: 0,
    pointerEvents: "none"
  }}>
    <svg width="100%" height="100%" style={{ position: "absolute", left: 0, top: 0 }}>
      {/* Líneas horizontales animadas */}
      {[...Array(8)].map((_, i) => (
        <line
          key={i}
          x1="0"
          y1={40 + i * 60}
          x2="100%"
          y2={40 + i * 60}
          stroke="#00e0ff"
          strokeWidth="2"
          opacity="0.08"
        >
          <animate
            attributeName="x2"
            values="0;1000"
            dur={`${2 + i * 0.3}s`}
            repeatCount="indefinite"
          />
        </line>
      ))}
      {/* Puntos animados */}
      {[...Array(16)].map((_, i) => (
        <circle
          key={i}
          cx={80 + (i % 8) * 140}
          cy={60 + Math.floor(i / 8) * 180}
          r="6"
          fill="#00e0ff"
          opacity="0.18"
        >
          <animate
            attributeName="cy"
            values="60;240;60"
            dur={`${3 + i * 0.2}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}
    </svg>
  </div>
  {/* Contenido central */}
  <div style={{
    position: "relative",
    zIndex: 1,
    textAlign: "center",
    color: "#fff",
    width: "100%"
  }}>
    <h2 style={{
      fontSize: "2.5rem",
      fontWeight: "bold",
      letterSpacing: "2px",
      marginBottom: "1rem",
      background: "linear-gradient(90deg, #00e0ff 0%, #007bff 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent"
    }}>
      Innovación Tecnológica
    </h2>
    <p style={{
      fontSize: "1.3rem",
      maxWidth: "600px",
      margin: "0 auto",
      color: "#b6eaff"
    }}>
      Creamos soluciones inteligentes y conectadas para el futuro.  
      <br />
      <span style={{ fontWeight: "bold", color: "#00e0ff" }}>¡Descubre cómo la tecnología transforma tu empresa!</span>
    </p>
  </div>
</section>
    </main>
  );
}

// ...existing code...

function BrandsSection() {
  // Reemplaza los src por los logos de tus marcas (pueden estar en /public/logos/)
  const brands = [
    { name: "Cisco", src: "/logos/cisco logo.png" },
    { name: "Fortinet", src: "/logos/fortinet logo.png" },
    { name: "Lutron", src: "/logos/lutron logo.png" },
    { name: "Panduit", src: "/logos/panduit logo.png" },
    { name: "RTI", src: "/logos/rti logo.jpg" },
    { name: "niagara", src: "/logos/niagara logo.png" },
    { name: "c4", src: "/logos/c4 logo.png" },
    { name: "Ruckus", src: "/logos/Ruckus logo.png" },
    
    // Agrega más marcas si lo deseas
  ];

  return (
    <section
      style={{
        background: "linear-gradient(90deg, #f8fafc 60%, #e3e9f7 100%)",
        padding: "3rem 1rem",
        textAlign: "center",
        boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
        margin: "0 0 2rem 0"
      }}
    >
      <h2 style={{ fontWeight: "bold", fontSize: "2rem", marginBottom: "2rem", color: "#222" }}>
        Marcas que nos reconocen
      </h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "2.5rem"
        }}
      >
        {brands.map((brand) => (
          <div
            key={brand.name}
            style={{
              background: "#fff",
              borderRadius: "12px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              padding: "1.2rem 2.5rem",
              display: "flex",
              alignItems: "center",
              minWidth: "120px",
              minHeight: "80px",
              transition: "transform 0.2s",
            }}
          >
            <img
              src={brand.src}
              alt={brand.name}
              style={{
                maxHeight: "48px",
                maxWidth: "120px",
                objectFit: "contain",
                filter: "grayscale(0.2)",
                opacity: 0.9,
                margin: "0 auto"
              }}
            />
          </div>
        ))}
      </div>
    </section>
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
        <BrandsSection />
        <Footer />
      </div>
    </Router>
  );
}


// ...existing code...

// ...en tu componente App o Home, justo antes del Footer:


export default App;