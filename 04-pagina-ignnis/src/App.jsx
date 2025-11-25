import './App.css'

export const App = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success px-4">
      <a className="navbar-brand fw-bold" href="#">IGNNIS <span className="fs-6">NUBIANS</span></a>
      <div className="ms-auto d-flex gap-3">
        <i className="bi bi-list fs-4"></i>
        <i className="bi bi-house fs-4"></i>
        <i className="bi bi-search fs-4"></i>
        <i className="bi bi-person fs-4"></i>
      </div>
    </nav>
  )
}
