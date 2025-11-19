import "./SectionCard.css"

export const SectionCard = () => {
  return (
    <div className="container mt-5">

      <div className="row g-3">

        
        <div className="col-6 col-md-2">
          <div className="tile tile-green d-flex flex-column justify-content-center align-items-center">
            <i className="bi bi-journal-bookmark icon"></i>
            <span>About Us</span>
          </div>
        </div>

        
        <div className="col-6 col-md-2">
          <div className="tile tile-lightgreen d-flex flex-column justify-content-center align-items-center">
            <i className="bi bi-people-fill icon"></i>
            <span>Our Team</span>
          </div>
        </div>

        
        <div className="col-12 col-md-4">
          <div className="tile tile-blue big-tile d-flex flex-column justify-content-center align-items-center">
            <i className="bi bi-image icon-big"></i>
            <span>Our Works</span>
          </div>
        </div>

        
        <div className="col-12 col-md-4">
          <div className="tile tile-pink d-flex flex-column justify-content-center align-items-center">
            <i className="bi bi-geo-alt icon"></i>
            <span>Contacts</span>
          </div>
        </div>

        
        <div className="col-12 col-md-4">
          <div className="tile tile-red long-tile d-flex flex-column justify-content-center align-items-center">
            <i className="bi bi-download icon"></i>
            <span>Resume</span>
          </div>
        </div>

        
        <div className="col-6 col-md-2">
          <div className="tile tile-orange d-flex flex-column justify-content-center align-items-center">
            <i className="bi bi-pencil-square icon"></i>
            <span>Blog</span>
          </div>
        </div>

        
        <div className="col-6 col-md-2">
          <div className="tile tile-yellow d-flex flex-column justify-content-center align-items-center">
            <i className="bi bi-envelope icon"></i>
            <span>Feedback</span>
          </div>
        </div>

      </div>
    </div>
  )
}
