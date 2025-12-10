import './App.css'
import { Ignnis } from './components/ignnis'

export const App = () => {
  return (
    <>
<header className="ignnis-header">
  <div className="header-left">
    <i className="bi bi-list"></i>
    <img src="/public/Logo-Ignnis-png.png" alt="IGNNIS" className="logo" />
  </div>

  <div className="header-center">
    <i className="bi bi-house"></i>
    <span className="brand-name">IGNNIS</span>
  </div>

  <div className="header-right">
    <i className="bi bi-person"></i>
    <i className="bi bi-search"></i>
    <i className="bi bi-bag"></i>
  </div>
</header>


<section className="hero-section">
  <div className="hero-overlay">
    <div className="hero-text">
      <p>
        Cuando la Tierra deja de hablar, solo los que escuchan pueden sembrar de nuevo.
      </p>
    </div>

    <div className="hero-arrow">
      <i className="bi bi-chevron-down"></i>
    </div>
  </div>
</section>
    <Ignnis/>
    </>

  )
}
