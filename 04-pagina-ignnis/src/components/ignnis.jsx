import '../styles/ignnis.css'

export const Ignnis = () => {
  return (
    <>
    {/* ================= CONTEXTUALIZACIÓN ================= */}
    <section className="intro-section">
      <div className="container-fluid">
        <div className="row g-0">

          {/* Columna izquierda */}
          <div className="col-md-6 intro-left d-flex flex-column justify-content-center align-items-start px-5">
          <img className='marca-de-agua' src="/public/marca-de-agua.png" alt="" />
            <h2 className="mb-4">Introducción</h2>
            <button className="btn btn-outline-dark">
              DESCUBRE MÁS
            </button>
          </div>

          {/* Columna derecha */}
          <div className="col-md-6 position-relative">
            <img
              src="/public/imagen-section2.jpg"
              alt="Introducción"
              className="img-fluid w-100 h-100 object-fit-cover"
            />

            <div className="intro-texto">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed lobortis eleifend metus sed finibus...
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>


{/* ================= section 3 ================= */}
  <section className="bg-dark text-white py-5">
      <div className="container">

        <h2 className="text-center text-success mb-3">Contextualización</h2>
        <p className="text-center mb-5">
          El presente proyecto se deriva del estudio y análisis de diferentes temas:
          Sostenibilidad y recursos naturales y las narrativas distópicas mediante
          formatos digitales interactivos.
        </p>

        {/* Bloque 1 */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <h4 className="text-success">Sostenibilidad y Recursos naturales</h4>
            <p>
               La sostenibilidad se refiere a la capacidad de satisfacer las necesidades del presente sin comprometer la capacidad de las futuras generaciones para satisfacer las suyas, integrando consideraciones ambientales, sociales y económicas. 
               Por otro lado, los recursos naturales son aquellos bienes y servicios que la naturaleza proporciona, como el agua, los minerales, los bosques y la biodiversidad, que son fundamentales para el desarrollo humano y el mantenimiento de los ecosistemas. La gestión adecuada de estos recursos es esencial para promover un desarrollo sostenible y preservar el equilibrio ecológico.
              
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img src="/public/img-planeta.jpg" className="img-fluid img-redonda" />
          </div>
        </div>

        <hr />

        {/* Bloque 2 */}
        <div className="row align-items-center mt-5">
          <div className="col-md-6 text-center">
            <img src="/public/img-caos.jpg" className="img-fluid img-redonda" />
          </div>
          <div className="col-md-6">
            <h4 className="text-success">Las 7 copas de la Ira de Dios</h4>
            <p>
              Las siete copas de la ira de Dios son un conjunto de juicios divinos descritos en el libro del Apocalipsis en la Biblia, específicamente en el capítulo 16. Estas copas representan plagas y calamidades que se derraman sobre la tierra como consecuencia de la desobediencia y el rechazo a Dios por parte de la humanidad. 
              Cada copa simboliza un castigo específico, que incluye enfermedades, desastres naturales y oscuridad, y su propósito es llamar a la humanidad al arrepentimiento y a la justicia divina. Estas visiones apocalípticas reflejan la lucha entre el bien y el mal y la inevitabilidad del juicio final.
            </p>
          </div>
        </div>

      </div>
    </section>


{/* ================= CÓMIC INTERACTIVO ================= */}
<section className="comic-section text-center py-5">
      <div className="container">

        <h2 className="mb-5">CÓMIC INTERACTIVO</h2>

        <div className="row mb-5">

          <div className="col-md-4">
            <img src="/assets/personaje1.png" className="img-fluid mb-3" />
            <h5>Padre Theo</h5>
            <p>Ex-sacerdote expulsado por fusionar teología cristiana con cosmovisiones indígenas.</p>
          </div>

          <div className="col-md-4">
            <img src="/assets/personaje2.png" className="img-fluid mb-3" />
            <h5>Aina</h5>
            <p>Hija de agricultores arruinados por la infertilidad de la tierra.</p>
          </div>

          <div className="col-md-4">
            <img src="/assets/personaje3.png" className="img-fluid mb-3" />
            <h5>Kiran</h5>
            <p>Originario de una isla ya sumergida. Sobrevivió al hundimiento.</p>
          </div>

        </div>

        <button className="btn btn-outline-dark px-5">
          VER CÓMIC
        </button>

      </div>
    </section>


{/* ================= TIENDA ================= */}
  <section className="bg-dark text-white py-5">
      <div className="container">

        <h2 className="text-center bg-success py-3 mb-5">Nuestra Tienda</h2>

        <div className="row text-center">

          <div className="col-md-4">
            <h5 className="text-success">Buso con chompa IGNNIS</h5>
            <img src="/public/buso.png" className="img-fluid mb-3" />
            <p className="text-success">$ 150.000</p>
            <p>Prenda cómoda y moderna con un diseño único.</p>
            <button className="btn btn-outline-success">
              AÑADIR A LA BOLSA
            </button>
          </div>

          <div className="col-md-4">
            <h5 className="text-success">Taza de cerámica IGNNIS</h5>
            <img src="/public/taza.png" className="img-fluid mb-3" />
            <p className="text-success">$ 25.000</p>
            <p>Taza elegante y resistente.</p>
            <button className="btn btn-outline-success">
              AÑADIR A LA BOLSA
            </button>
          </div>

          <div className="col-md-4">
            <h5 className="text-success">Libro IGNNIS</h5>
            <img src="/public/libroo.png" className="img-fluid mb-3" />
            <p className="text-success">$ 110.000</p>
            <p>Libro con pasta dura y diseño minimalista.</p>
            <button className="btn btn-outline-success">
              AÑADIR A LA BOLSA
            </button>
          </div>

        </div>

      </div>
    </section>



    </>
  )
}
