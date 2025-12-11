import '../styles/ignnis.css'

export const Ignnis = () => {
  return (
    <>
       {/* INTRO */}
      <section style={{ minHeight: "90vh" }}>
        <div className="container-fluid">
          <div className="row g-0">

            <div
              className="col-md-6 d-flex flex-column justify-content-center align-items-start"
              style={{
                backgroundColor: "#9ff0c8",
                minHeight: "90vh",
                padding: "3.5rem",
                position: "relative",
              }}
            >
              <img
                src="/public/marca-de-agua.png"
                alt=""
                style={{
                  position: "absolute",
                  top: "2.5rem",
                  left: "2.5rem",
                  width: "140px",
                }}
              />

              <h2
                className="fw-bold"
                style={{
                  fontSize: "3.2rem",
                  lineHeight: "1",
                  color: "#133825",
                }}
              >
                Introducción
              </h2>

              <button
                className="btn"
                style={{
                  border: "2px solid #133825",
                  color: "#133825",
                  background: "transparent",
                  padding: "0.6rem 1.2rem",
                  fontWeight: "700",
                  borderRadius: "6px",
                }}
              >
                DESCUBRE MÁS
              </button>
            </div>

            <div
              className="col-md-6 position-relative"
              style={{ minHeight: "90vh" }}
            >
              <img
                src="/public/imagen-section2.jpg"
                className="img-fluid w-100 h-100"
                style={{ objectFit: "cover" }}
              />

              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: "rgba(3,92,73,0.88)",
                  color: "#fff",
                  padding: "1.2rem 2rem",
                  fontSize: "0.9rem",
                  lineHeight: "1.5",
                }}
              >
                <p className="m-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  lobortis eleifend metus sed finibus...
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CONTEXTUALIZACION */}
      <section className="py-5" style={{ backgroundColor: "#1f2326", color: "white" }}>
        <div className="container">
          <h2 className="text-center mb-3" style={{ color: "#3cb88a", fontSize: "2.2rem" }}>
            Contextualización
          </h2>

          <p className="text-center mb-5" style={{ maxWidth: "900px", margin: "0 auto" }}>
            El presente proyecto se deriva del estudio...
          </p>

          <div className="row align-items-center mb-5">
            <div className="col-md-6">
              <h4 style={{ color: "#3cb88a" }}>Sostenibilidad  y Recursos naturales</h4>
              <p>
                La sostenibilidad se refiere a la capacidad de satisfacer las necesidades del presente sin comprometer la capacidad de las futuras generaciones para satisfacer las suyas, integrando consideraciones ambientales, sociales y económicas. 
                Por otro lado, los recursos naturales son aquellos bienes y servicios que la naturaleza proporciona, como el agua, los minerales, los bosques y la biodiversidad, que son fundamentales para el desarrollo humano y el mantenimiento de los ecosistemas. La gestión adecuada de estos recursos es esencial para promover un desarrollo sostenible y preservar el equilibrio ecológico.
              </p>
            </div>

            <div className="col-md-6 text-center">
              <img
                src="/public/img-planeta.jpg"
                className="img-fluid"
                style={{
                  width: "280px",
                  height: "280px",
                  objectFit: "cover",
                  borderRadius: "50%",
                  boxShadow: "0 0 25px rgba(0,0,0,0.6)",
                }}
              />
            </div>
          </div>

          <hr style={{ backgroundColor: "rgba(255,255,255,0.25)", height: "1px" }} />

          <div className="row align-items-center mt-5">
            <div className="col-md-6 text-center">
              <img
                src="/public/img-caos.jpg"
                className="img-fluid"
                style={{
                  width: "280px",
                  height: "280px",
                  objectFit: "cover",
                  borderRadius: "50%",
                  boxShadow: "0 0 25px rgba(0,0,0,0.6)",
                }}
              />
            </div>

            <div className="col-md-6">
              <h4 style={{ color: "#3cb88a" }}>Las 7 copas de la Ira de Dios.</h4>
              <p>Las siete copas de la ira de Dios son un conjunto de juicios divinos descritos en el libro del Apocalipsis en la Biblia, específicamente en el capítulo 16. Estas copas representan plagas y calamidades que se derraman sobre la tierra como consecuencia de la desobediencia y el rechazo a Dios por parte de la humanidad. 
                 Cada copa simboliza un castigo específico, que incluye enfermedades, desastres naturales y oscuridad, y su propósito es llamar a la humanidad al arrepentimiento y a la justicia divina. Estas visiones apocalípticas reflejan la lucha entre el bien y el mal y la inevitabilidad del juicio final.</p>
            </div>
          </div>

        </div>
      </section>

      {/* COMIC */}
      <section className="text-center py-5" style={{ background: "#45aa87", color: "#0f2d23" }}>
        <div className="container">
          <h2 className="mb-5 fw-bold">CÓMIC INTERACTIVO</h2>

          <div className="row justify-content-center mb-5">

            {[
              { img: "Aina", name: "Aina" },
              { img: "Padre", name: "Padre Theo" },
              { img: "Monstruo", name: "Neirak" },
              { img: "Kiran", name: "Kiran" },
            ].map((p) => (
              <div className="col-md-3 mb-4">
                <img
                  src={`/public/${p.img}.png`}
                  className="img-fluid mb-3"
                  style={{ maxWidth: "220px" }}
                />
                <h5 className="fw-bold mt-2">{p.name}</h5>
                <p style={{ maxWidth: "260px", margin: "0 auto" }}>
                  Ex-sacerdote expulsado por fusionar teología cristiana...
                </p>
              </div>
            ))}

          </div>

          <button className="btn btn-outline-dark px-5">VER CÓMIC</button>
        </div>
      </section>

      {/* TIENDA */}
      <section className="py-5" style={{ background: "#353535", color: "white" }}>
        <div className="container">

          <h2 className="text-center py-3 mb-5" style={{ background: "#2f7d63" }}>
            Nuestra Tienda
          </h2>

          <div className="row text-center">

            {[
              { name: "Buso con chompa IGNNIS", price: "150.000", img: "buso.png" },
              { name: "Taza de cerámica IGNNIS", price: "25.000", img: "taza.png" },
              { name: "Libro IGNNIS", price: "110.000", img: "libroo.png" },
            ].map((p) => (
              <div className="col-md-4 mb-5">
                <h5 style={{ color: "#4fd1a5" }}>{p.name}</h5>

                <img src={`/public/${p.img}`} className="img-fluid mb-3" />

                <p style={{ color: "#4fd1a5" }}>${p.price}</p>

                <button
                  className="btn mb-3"
                  style={{
                    border: "2px solid #4fd1a5",
                    color: "#4fd1a5",
                    fontSize: "0.85rem",
                  }}
                >
                  AÑADIR A LA BOLSA <i className="bi bi-bag"></i>
                </button>

                <div className="d-flex justify-content-center gap-3" style={{ color: "#4fd1a5" }}>
                  <i className="bi bi-heart"></i>
                  <i className="bi bi-chat"></i>
                  <i className="bi bi-send"></i>
                  <i className="bi bi-bookmark"></i>
                  <i className="bi bi-three-dots-vertical"></i>
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* SIGUENOS */}
      <section className="text-center" style={{ background: "#4fa35f", padding: "3rem 1rem", color: "white" }}>
        <h3 className="fw-bold mb-4" style={{ letterSpacing: "2px" }}>
          SÍGUENOS:
        </h3>

        <div className="d-flex justify-content-center gap-4">
          <i className="bi bi-instagram fs-1"></i>
          <i className="bi bi-facebook fs-1"></i>
          <i className="bi bi-youtube fs-1"></i>
          <i className="bi bi-twitter-x fs-1"></i>
          <i className="bi bi-tiktok fs-1"></i>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-white" style={{ background: "#3a3a3a", padding: "3rem 1rem" }}>
        <div className="container">
          <div className="row">

            <div className="col-md-6">
              <h6 className="fw-bold mb-3">CONTÁCTANOS</h6>

              <p className="d-flex align-items-center gap-2 mb-2">
                <i className="bi bi-telephone-fill"></i> Llámanos al 3001537269
              </p>

              <p className="d-flex align-items-center gap-2 mb-2">
                <i className="bi bi-whatsapp"></i> Contacta con nosotros vía WhatsApp
              </p>

              <p className="d-flex align-items-center gap-2 mb-2">
                <i className="bi bi-envelope-fill"></i> Envíanos un correo electrónico
              </p>
            </div>

            <div className="col-md-6">
              <h6 className="fw-bold mb-3">Dirección de correo electrónico*</h6>
              <input
                type="email"
                placeholder="Introduce tu correo electrónico"
                className="w-100"
                style={{
                  background: "transparent",
                  border: "none",
                  borderBottom: "1px solid #777",
                  padding: "0.5rem 0",
                  color: "white",
                }}
              />
            </div>

          </div>
        </div>
      </footer>

    </>
  )
}
