import React from "react";

const imagenes = [
  "/Hoteles/Waldorf.jpg",
  "/Hoteles/Four Seasons.jpg",
  "/Hoteles/Rosewood.jpg",
  "/Hoteles/Chileno.jpg",
  "/Hoteles/Waldorf.jpg",
  "/Hoteles/Four Seasons.jpg",
  "/Hoteles/Rosewood.jpg",
  "/Hoteles/Chileno.jpg",
  "/Hoteles/Waldorf.jpg",
  "/Hoteles/Four Seasons.jpg",
  "/Hoteles/Rosewood.jpg",
  "/Hoteles/Chileno.jpg",
  "/Hoteles/Waldorf.jpg",
  "/Hoteles/Four Seasons.jpg",
  "/Hoteles/Rosewood.jpg",
  "/Hoteles/Chileno.jpg",

  // Agrega más rutas de imágenes aquí
];

function Proyectos() {
  return (
    <main style={{ background: "#f5f5f5", minHeight: "100vh", padding: "3rem 0" }}>
      <h1 style={{
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "2.5rem",
        marginBottom: "2.5rem",
        color: "#007bff",
        letterSpacing: "2px"
      }}>
        Proyectos realizados
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "1.5rem",
          maxWidth: "1100px",
          margin: "0 auto"
        }}
      >
        {imagenes.map((img, idx) => (
          <div
            key={idx}
            style={{
              borderRadius: "14px",
              overflow: "hidden",
              boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
              position: "relative",
              cursor: "pointer",
              transition: "transform 0.25s, box-shadow 0.25s"
            }}
            onMouseOver={e => {
              e.currentTarget.style.transform = "scale(1.04)";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.18)";
            }}
            onMouseOut={e => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.08)";
            }}
          >
            <img
              src={img}
              alt={`Proyecto ${idx + 1}`}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
                display: "block",
                transition: "filter 0.3s"
              }}
            />
            {/* Overlay al hacer hover */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(120deg, rgba(0,123,255,0.12) 0%, rgba(0,224,255,0.18) 100%)",
                opacity: 0,
                transition: "opacity 0.3s"
              }}
              className="img-overlay"
            />
          </div>
        ))}
      </div>
    </main>
  );
}

export default Proyectos;