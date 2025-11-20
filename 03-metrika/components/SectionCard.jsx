import "./SectionCard.css"

export const SectionCard = () => {
  return (
    <div className="container mt-5">

      <div className="row g-3">

        
        <div className="col-6 col-md-2">
          <div className="tile tile-green d-flex flex-column justify-content-center align-items-center">
            <img className="icons-cards" src="../public/libro.png" alt="" />
            <span className="titles-card">About Us</span>
          </div>
        </div>

        
        <div className="col-6 col-md-2">
          <div className="tile tile-lightgreen d-flex flex-column justify-content-center align-items-center">
            <img className="icons-cards" src="../public/cajon.png" alt="" />
            <span className="titles-card">Our Team</span>
          </div>
        </div>

        
        <div className="col-12 col-md-4">
          <div className="tile tile-blue big-tile d-flex flex-column justify-content-center align-items-center">
            <img className="icon-galery" src="../public/galery.png" alt="" />
            <span className="titles-card3">Our Works</span>
          </div>
        </div>

        
        <div className="col-12 col-md-4">
          <div className="tile tile-pink d-flex flex-column justify-content-center align-items-center">
            <img className="icons-cards2" src="../public/mapa.png" alt="" />
            <span className="titles-card2">Contacts</span>
          </div>
        </div>

        
        <div className="col-12 col-md-4">
          <div className="tile tile-red long-tile d-flex flex-column justify-content-center align-items-center">
            <img className="icons-cards2" src="../public/guardar-icon.png" alt="" />
            <span className="titles-card2">Resume</span>
          </div>
        </div>

        
        <div className="col-6 col-md-2">
          <div className="tile tile-orange d-flex flex-column justify-content-center align-items-center">
            <img className="icons-cards-lapiz" src="../public/lapiz.png" alt="" />
            <span className="titles-card">Blog</span>
          </div>
        </div>

        
        <div className="col-6 col-md-2">
          <div className="tile tile-yellow d-flex flex-column justify-content-center align-items-center">
            <img className="icons-cards" src="../public/sobre.png" alt="" />
            <span className="titles-card">Feedback</span>
          </div>
        </div>

      </div>
    </div>
    
  )
}
