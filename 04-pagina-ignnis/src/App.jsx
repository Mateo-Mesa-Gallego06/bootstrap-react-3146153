import './App.css'
import { Ignnis } from './components/Ignnis'

export const App = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-success px-4">
      <h1 className="navbar-brand fw-bold" href="#">IGNNIS </h1>
      <div className="ms-auto d-flex gap-3">
        <i className="bi bi-list fs-4"></i>
        <i className="bi bi-house fs-4"></i>
        <i className="bi bi-search fs-4"></i>
        <i className="bi bi-person fs-4"></i>
      </div>
    </nav>
    <Ignnis/>
    </>

  )
}
