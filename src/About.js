import React from "react";


function About() {
  return (
    <main style={{ background: "#f8fafc", minHeight: "100vh", padding: "0 0 3rem 0" }}>
      {/* Sección 1: Quiénes somos */}
      <section style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "3rem 1.5rem 2rem 1.5rem",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: "2.5rem"
      }}>
        <div style={{ flex: "1 1 320px" }}>
          <h1 style={{
            fontWeight: "bold",
            fontSize: "2.5rem",
            color: "#007bff",
            marginBottom: "1.2rem"
          }}>
            ¿Quiénes somos?
          </h1>
          <p style={{ fontSize: "1.15rem", color: "#23235c", lineHeight: 1.7 }}>
            Somos <b>Broadband Integration Company</b>, expertos en soluciones de telecomunicaciones, automatización y tecnología. 
            Nos apasiona conectar empresas y personas con innovación, calidad y soporte personalizado.
            <br /><br />
            Más de 10 años de experiencia nos respaldan, trabajando con marcas líderes y clientes de alto nivel.
          </p>
        </div>
        <div style={{ flex: "1 1 320px", textAlign: "center" }}>
          <img
            src="/about/2.jpg"
            alt="Equipo BBINCO"
            style={{
              maxWidth: "340px",
              width: "100%",
              borderRadius: "18px",
              boxShadow: "0 4px 24px rgba(0,123,255,0.08)"
            }}
          />
        </div>
      </section>

      {/* Sección 2: Misión y Visión */}
      <section style={{
        background: "linear-gradient(90deg, #e3e9f7 60%, #f8fafc 100%)",
        padding: "3rem 1.5rem",
        margin: "2rem 0",
        borderRadius: "18px",
        maxWidth: "1100px",
        marginLeft: "auto",
        marginRight: "auto",
        boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
        display: "flex",
        flexWrap: "wrap",
        gap: "2.5rem",
        justifyContent: "center"
      }}>
        <div style={{
          flex: "1 1 260px",
          minWidth: "260px",
          background: "#fff",
          borderRadius: "14px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
          padding: "2rem 1.5rem",
          textAlign: "center"
        }}>
          <h2 style={{ color: "#1560bd", fontWeight: "bold", marginBottom: "1rem" }}>Misión</h2>
          <p style={{ color: "#23235c", fontSize: "1.1rem" }}>
            Poder brindar soluciones eficientes con las mejores tecnologias creativas e innovadoras a traves de servicios tecnologicos
            especializados hechos a la medida y cumpliendo con las necesidades de cada uno de nuestros clientes.
          </p>
        </div>
        <div style={{
          flex: "1 1 260px",
          minWidth: "260px",
          background: "#fff",
          borderRadius: "14px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
          padding: "2rem 1.5rem",
          textAlign: "center"
        }}>
          <h2 style={{ color: "#1560bd", fontWeight: "bold", marginBottom: "1rem" }}>Nuestra visión</h2>
          <p style={{ color: "#23235c", fontSize: "1.1rem" }}>
            Alcanzar el avance tecnológico desde un enfoque creativo y de alta calidad cubriendo con tods las necesidades del dia a dia con un firme
            proposito , seguir fortaleciendo los lazos que a través de los años hemos establecido con todos nuestros clientes.
          </p>
        </div>
      </section>

      {/* Sección 3: Nuestro equipo */}
      <section style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "2rem 1.5rem 0 1.5rem"
      }}>
        <h2 style={{
          fontWeight: "bold",
          fontSize: "2rem",
          color: "#007bff",
          marginBottom: "2rem",
          textAlign: "center"
        }}>
          Nuestro equipo
        </h2>
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          justifyContent: "center"
        }}>
          {[
            {
              name: "Ing. Emmanuel Urbina",
              role: "Director General",
              img: "/about/Emmanuel.jpg"
            },
            {
              name: "Ing. Omar Guzmán",
              role: "Director de Finanzas",
              img: "/about/Omar.jpg"
            },
            {
              name: "Lic. Alberto Chavez",
              role: "Director Comercial",
              img: "/about/Alberto.jpg"
            }
          ].map((person, idx) => (
            <div key={idx} style={{
              background: "#fff",
              borderRadius: "14px",
              boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
              padding: "2rem 1.5rem",
              minWidth: "220px",
              maxWidth: "260px",
              textAlign: "center"
            }}>
              <img
                src={person.img}
                alt={person.name}
                style={{
                  width: "90px",
                  height: "90px",
                  objectFit: "cover",
                  borderRadius: "50%",
                  marginBottom: "1rem",
                  border: "3px solid #1560bd",
                  boxShadow: "0 2px 8px rgba(0,123,255,0.10)"
                }}
              />
              <h3 style={{ margin: "0 0 0.3rem 0", color: "#1560bd" }}>{person.name}</h3>
              <p style={{ color: "#23235c", fontWeight: "500", margin: 0 }}>{person.role}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default About;