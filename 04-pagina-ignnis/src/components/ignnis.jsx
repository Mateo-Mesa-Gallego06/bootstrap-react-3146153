import '../styles/ignnis.css'

export const Ignnis = ({titulo,intro}) => {
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
                {intro}
              </h2>

              <button
                className="btn px-5"
                style={{
                  border: "2px solid #133825",
                  color: "#133825",
                  background: "transparent",
                  padding: "0.6rem 1.2rem",
                  fontWeight: "700",

                  borderRadius: "6px",
                }}
              >
                {titulo}
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

     
    </>
  )
}
