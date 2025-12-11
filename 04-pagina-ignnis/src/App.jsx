import './App.css'
import { Ignnis } from './components/ignnis'

export const App = () => {
  return (
    <>
      <header
        className="d-flex align-items-center justify-content-between px-4"
        style={{
          backgroundColor: "#3f7f67",
          height: "70px",
        }}
      >
        <div className="d-flex align-items-center gap-3">
          <i className="bi bi-list" style={{ color: "#c8ffe9", fontSize: "1.3rem", cursor: "pointer" }}></i>
          <img src="/public/Logo-Ignnis-png.png" alt="IGNNIS" style={{ height: "38px" }} />
        </div>

        <div className="d-flex align-items-center gap-3">
          <i className="bi bi-house" style={{ color: "#c8ffe9", fontSize: "1.3rem" }}></i>
          <span
            style={{
              color: "#fff",
              fontWeight: "bold",
              letterSpacing: "2px",
              fontSize: "1.1rem",
            }}
          >
            IGNNIS
          </span>
        </div>

        <div className="d-flex align-items-center gap-3">
          <i className="bi bi-person" style={{ color: "#c8ffe9", fontSize: "1.3rem" }}></i>
          <i className="bi bi-search" style={{ color: "#c8ffe9", fontSize: "1.3rem" }}></i>
          <i className="bi bi-bag" style={{ color: "#c8ffe9", fontSize: "1.3rem" }}></i>
        </div>
      </header>

      <section
        style={{
          height: "calc(100vh - 70px)",
          backgroundImage: 'url("/public/fondo-section1.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div className="h-100 w-100 position-relative">
          <div
            className="text-center"
            style={{
              position: "absolute",
              bottom: "120px",
              left: "50%",
              transform: "translateX(-50%)",
              background: "rgba(0, 0, 0, 0.55)",
              padding: "2rem 3rem",
              maxWidth: "600px",
              zIndex: 2,
            }}
          >
            <p className="m-0 text-white">
              Cuando la Tierra deja de hablar, solo los que escuchan pueden sembrar de nuevo.
            </p>
          </div>

          <div
            style={{
              position: "absolute",
              bottom: "90px",
              left: "50%",
              transform: "translateX(-50%)",
              animation: "bounce 2s infinite",
            }}
          >
            <i
              className="bi bi-chevron-down"
              style={{ fontSize: "2rem", color: "#8cffd8" }}
            ></i>
          </div>
        </div>
      </section>
    <Ignnis/>
    </>

  )
}
