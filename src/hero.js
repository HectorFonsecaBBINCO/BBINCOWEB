import React, { useRef, useEffect } from "react";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";

function HeroSection() {
  const vantaRef = useRef(null);

  useEffect(() => {
    const vantaEffect = NET({
      el: vantaRef.current,
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: "blue",
      backgroundColor: "#0056b3",
      points: 3.00
    });
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <header ref={vantaRef} style={{ minHeight: "100vh", width: "100%", position: "relative" }}>
      <div style={{
        position: "relative",
        zIndex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh"
      }}>
        <img
          src="/bbinco_no_Fondo.png"
          alt="BBINCO Logo"
          style={{
            width: "180px",
            filter: "drop-shadow(0 8px 32px #00e0ff88)",
            animation: "logoPop 1.2s cubic-bezier(.68,-0.55,.27,1.55)"
          }}
        />
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
    </header>
  );
}

export default HeroSection;