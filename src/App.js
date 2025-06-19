import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import About from './About';
import Proyectos from './Proyectos';
import HeroSection from "./hero";





function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <nav
      className={`navbar${scrolled ? " navbar-scrolled" : ""}`}
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: scrolled ? "#f8fafc" : "#f8fafc",
        boxShadow: scrolled ? "0 2px 12px rgba(0,0,0,0.06)" : "0 1px 6px rgba(0,0,0,0.03)",
        transition: "background 0.3s, box-shadow 0.2s",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0.5rem 1.5rem"
      }}
    >
      {/* Hamburguesa SIEMPRE visible en móvil, OCULTA en escritorio */}
      <button
        className="navbar-burger"
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "0.5rem",
          display: "none"
        }}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menú"
      >
        <span style={{
          display: "block",
          width: "28px",
          height: "4px",
          background: "#007bff",
          margin: "6px 0",
          borderRadius: "2px",
          transition: "0.3s"
        }} />
        <span style={{
          display: "block",
          width: "28px",
          height: "4px",
          background: "#007bff",
          margin: "6px 0",
          borderRadius: "2px",
          transition: "0.3s"
        }} />
        <span style={{
          display: "block",
          width: "28px",
          height: "4px",
          background: "#007bff",
          margin: "6px 0",
          borderRadius: "2px",
          transition: "0.3s"
        }} />
      </button>

      {/* Logo SIEMPRE centrado en móvil */}
      <div
        className="navbar-logo"
        style={{
          flex: "1 1 auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          pointerEvents: "auto" // Cambia a auto
        }}
      >
        <img
          src="/bbinco_no_Fondo.png"
          alt="BBINCO Logo"
          style={{
            height: "100%",
            width: "auto",
            display: "block",
            objectFit: "contain",
            maxWidth: "140px" // Limita el ancho en móvil si es necesario
          }}
        />
      </div>

      {/* Enlaces */}
      <div
        className="navbar-links"
        style={{
          display: "flex",
          gap: "1.5rem",
          alignItems: "center"
        }}
      >
        <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""} onClick={handleNavClick}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""} onClick={handleNavClick}>About</NavLink>
        <NavLink to="/proyectos" className={({ isActive }) => isActive ? "active" : ""} onClick={handleNavClick}>Proyectos</NavLink>
        <a href="/contact" onClick={handleNavClick}>Contact</a>
      </div>

      {/* Menú móvil */}
      <div
        className="navbar-mobile-menu"
        style={{
          position: "fixed",
          top: 0,
          right: menuOpen ? 0 : "-100vw",
          width: "70vw",
          maxWidth: "320px",
          height: "100vh",
          background: "#fff",
          boxShadow: "0 0 24px rgba(0,0,0,0.12)",
          display: "flex",
          flexDirection: "column",
          padding: "2rem 1.5rem",
          transition: "right 0.3s",
          zIndex: 200
        }}
      >
        <button
          onClick={() => setMenuOpen(false)}
          style={{
            alignSelf: "flex-end",
            background: "none",
            border: "none",
            fontSize: "2rem",
            color: "#007bff",
            cursor: "pointer",
            marginBottom: "2rem"
          }}
          aria-label="Cerrar menú"
        >
          ×
        </button>
        <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""} onClick={handleNavClick} style={{ marginBottom: "1.5rem" }}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""} onClick={handleNavClick} style={{ marginBottom: "1.5rem" }}>About</NavLink>
        <NavLink to="/proyectos" className={({ isActive }) => isActive ? "active" : ""} onClick={handleNavClick} style={{ marginBottom: "1.5rem" }}>Proyectos</NavLink>
        <a href="/contact" onClick={handleNavClick} style={{ marginBottom: "1.5rem" }}>Contact</a>
      </div>

      {/* Fondo oscuro al abrir menú */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.25)",
            zIndex: 150
          }}
        />
      )}

      {/* Responsive CSS */}
      <style>{`
        @media (max-width: 900px) {
          .navbar-burger {
            display: block !important;
            position: absolute;
            left: 1rem;
            z-index: 201;
          }
          .navbar-logo {
            position: absolute;
            left: 0;
            right: 0;
            margin: 0 auto;
            justify-content: center !important;
            pointer-events: none;
          }
          .navbar-links {
            display: none !important;
          }
        }
        @media (min-width: 901px) {
          .navbar-logo {
            position: static;
            justify-content: flex-start !important;
          }
        }
      `}</style>
    </nav>
  );
}

function ContactSection() {
  return (
    <section
      id="contacto"
      style={{
        background: "linear-gradient(135deg, #f5faff 60%, #e3e9f7 100%)",
        padding: "3rem 1rem",
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <h2 style={{
        fontWeight: "bold",
        fontSize: "2rem",
        marginBottom: "2rem",
        color: "#007bff",
        letterSpacing: "1px"
      }}>
        Contáctanos
      </h2>
      <form
        style={{
          background: "#fff",
          borderRadius: "16px",
          boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
          padding: "2.5rem 2rem",
          maxWidth: "400px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "1.2rem"
        }}
        onSubmit={e => {
          e.preventDefault();
          alert("¡Gracias por contactarnos! Pronto te responderemos.");
        }}
      >
        <input
          type="text"
          placeholder="Nombre"
          required
          style={{
            padding: "0.8rem 1rem",
            borderRadius: "8px",
            border: "1.5px solid #c7d0e0",
            fontSize: "1rem"
          }}
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          required
          style={{
            padding: "0.8rem 1rem",
            borderRadius: "8px",
            border: "1.5px solid #c7d0e0",
            fontSize: "1rem"
          }}
        />
        <textarea
          placeholder="Mensaje"
          required
          rows={4}
          style={{
            padding: "0.8rem 1rem",
            borderRadius: "8px",
            border: "1.5px solid #c7d0e0",
            fontSize: "1rem",
            resize: "vertical"
          }}
        />
        <button
          type="submit"
          style={{
            background: "linear-gradient(90deg, #007bff 0%, #00e0ff 100%)",
            color: "#fff",
            border: "none",
            borderRadius: "30px",
            padding: "0.9rem 0",
            fontWeight: "bold",
            fontSize: "1.1rem",
            marginTop: "0.5rem",
            cursor: "pointer",
            transition: "background 0.2s"
          }}
          onMouseOver={e => e.target.style.background = "#151566"}
          onMouseOut={e => e.target.style.background = "linear-gradient(90deg, #007bff 0%, #00e0ff 100%)"}
        >
          Enviar mensaje
        </button>
      </form>
    </section>
  );
}

function Home() {
  return (
    <main>
      <header

        style={{
          position: "relative",
          minHeight: "100vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          zIndex: 2,
          background: "#000", // Cambia aquí el color si lo deseas
          padding: 0
        }}
      >
        {/* Contenedor vertical para logo y slogan */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            zIndex: 2
          }}
        >

          {/* Logo animado */}
          <img
            src="/bbinco_no_Fondo.png"
            alt="BBINCO Logo"
            style={{
              width: "180px",
              filter: "drop-shadow(0 8px 32px #00e0ff88)",
              animation: "logoPop 1.2s cubic-bezier(.68,-0.55,.27,1.55)"
            }}
          />

          {/* Slogan y scroll indicator */}
          <div style={{ marginTop: "2.5rem", textAlign: "center" }}>
            <h1
              style={{
                color: "#fff",
                fontSize: "2.8rem",
                fontWeight: "bold",
                letterSpacing: "2px",
                textShadow: "0 4px 32px #00e0ff55"
              }}
            >
              Conectando el futuro, hoy.
            </h1>
            <p
              style={{
                color: "#b6eaff",
                fontSize: "1.3rem",
                marginTop: "1rem"
              }}
            >
              Soluciones inteligentes en telecomunicaciones y tecnología.
            </p>
            <div
              style={{
                marginTop: "2.5rem",
                display: "flex",
                justifyContent: "center",
                position: "relative"
              }}
            >
              <a
                href="#contacto"
                style={{
                  position: "relative",
                  display: "inline-block",
                  padding: "1rem 2.5rem",
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  color: "#fff",
                  background: "linear-gradient(90deg, #00e0ff 0%, #007bff 100%)",
                  border: "none",
                  borderRadius: "32px",
                  boxShadow: "0 0 24px #00e0ff88, 0 4px 24px #007bff44",
                  textShadow: "0 2px 8px #007bff88",
                  cursor: "pointer",
                  overflow: "hidden",
                  transition: "transform 0.18s, box-shadow 0.18s",
                  animation: "glowBounce 1.8s infinite"
                }}
                onMouseOver={e => {
                  e.currentTarget.style.transform = "scale(1.07)";
                  e.currentTarget.style.boxShadow =
                    "0 0 36px #00e0ffcc, 0 8px 32px #007bff66";
                }}
                onMouseOut={e => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow =
                    "0 0 24px #00e0ff88, 0 4px 24px #007bff44";
                }}
              >
                <span style={{ position: "relative", zIndex: 2 }}>
                  Contáctanos
                </span>
                {/* Destello animado */}
                <span
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "-75%",
                    width: "50%",
                    height: "100%",
                    background:
                      "linear-gradient(120deg, rgba(255,255,255,0.0) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0.0) 100%)",
                    transform: "skewX(-20deg)",
                    animation: "shine 2.5s infinite"
                  }}
                />
              </a>
              <style>{`
                @keyframes glowBounce {
                  0%, 100% { box-shadow: 0 0 24px #00e0ff88, 0 4px 24px #007bff44; transform: translateY(0);}
                  50% { box-shadow: 0 0 48px #00e0ffcc, 0 8px 32px #007bff66; transform: translateY(-8px);}
                }
                @keyframes shine {
                  0% { left: -75%; }
                  60% { left: 110%; }
                  100% { left: 110%; }
                }
              `}</style>
            </div>
            {/* Flecha scroll */}
            <div
              style={{
                marginTop: "3rem",
                animation: "bounce 1.5s infinite"
              }}
            >
              <svg
                width="32"
                height="32"
                fill="none"
                stroke="#00e0ff"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="8 12 16 20 24 12" />
              </svg>
            </div>
          </div>
        </div>
        <style>{`
          @keyframes logoPop {
            0% { transform: scale(0.7) rotate(-10deg); opacity: 0; }
            80% { transform: scale(1.1) rotate(2deg); opacity: 1; }
            100% { transform: scale(1) rotate(0); }
          }
          @keyframes bounce {
            0%, 100% { transform: translateY(0);}
            50% { transform: translateY(18px);}
          }
        `}</style>
      </header>



      <section style={{
        background: "#f8fafc",
        padding: "3rem 1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
        <h2 style={{
          fontWeight: "bold",
          fontSize: "2.2rem",
          marginBottom: "2rem",
          color: "#007bff"
        }}>
          Resultados que hablan por nosotros
        </h2>
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2.5rem",
          justifyContent: "center"
        }}>
          {[
            { number: "+100", label: "Proyectos realizados" },
            { number: "10", label: "Años de experiencia" },
            { number: "24/7", label: "Soporte" },
            { number: "+50", label: "Clientes felices" }
          ].map((item, idx) => (
            <div key={idx} style={{
              background: "#fff",
              borderRadius: "14px",
              boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
              padding: "2rem 2.5rem",
              minWidth: "180px",
              textAlign: "center"
            }}>
              <div style={{ fontSize: "2.8rem", fontWeight: "bold", color: "#1560bd" }}>{item.number}</div>
              <div style={{ fontSize: "1.1rem", color: "#23235c", marginTop: "0.5rem" }}>{item.label}</div>
            </div>
          ))}
        </div>
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
      <section style={{ minHeight: "60vh", padding: "2rem", background: "#181c2a", /* ... */ }}>
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
      </section>
      <ContactSection />


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

function Footer() {
  return (
    <footer className="footer">
      <span>© {new Date().getFullYear()} Todos los derechos reservados de BBINCO</span>
    </footer>
  );
}


function App() {
  return (
    <Router>
      <HeroSection />
      <div className="App" style={{ position: "relative", zIndex: 1 }}>

        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/proyectos" element={<Proyectos />} />
        </Routes>
        <BrandsSection />
        <Footer />
      </div>
    </Router>
  );
}




export default App;