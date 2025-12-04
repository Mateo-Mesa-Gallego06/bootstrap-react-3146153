import '../styles/ignnis.css'

export const Ignnis = () => {
  return (
    <>
    <section className="section1 d-flex justify-content-center align-items-center text-center">
      <div className="quote-box p-4">
        <p className="quote-text">
          “Cuando la Tierra deja de hablar, solo los que escuchan pueden sembrar de nuevo.”
        </p>
      </div>
        <div className="arrow-down">
        <i className="bi bi-caret-down"></i>
      </div>
    </section>

    <section className="intro-section d-flex">
      {/* Columna izquierda */}
      <div className="intro-left d-flex flex-column justify-content-between p-4">
        <div className="icon-top">
          <img src="/public/marca-de-agua.png" alt="imagen de relleno" className="marca-de-agua-image" />
        </div>
        <div className="text-center">
          <h2 className="intro-title">Introducción</h2>
          <button className="btn btn-dark mt-3">DESCUBRE MÁS</button>
        </div>
      </div>

      {/* Columna derecha */}
      <div className="intro-right position-relative">
        <img src="/public/imagen-section2.jpg" alt="imagen de relleno" className="intro-image" />
        <div className="intro-text p-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis eleifend metus sed finibus. Donec id est eget turpis gravida sodales id a massa. Nulla facilisi. Curabitur dui massa, rhoncus eu odio vitae, condimentum lobortis ex.
          </p>
        </div>
      </div>
    </section>
    </>
  )
}
