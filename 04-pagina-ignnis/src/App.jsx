import './App.css'
import { Ignnis } from './components/ignnis'

export const App = () => {
  return (
    <>
<header className="seccion-hero">
<nav className="barra-navegacion">
<div className="menu-izquierda">☰</div>
<div className="logo">IGNNIS</div>
<div className="menu-derecha">
<span>👤</span>
<span>🔍</span>
<span>🛒</span>
</div>
</nav>


<div className="hero-imagen">
<img
src="/public/fondo-section1.jpg" // REEMPLAZAR
alt="Imagen principal"
/>
<div className="hero-texto">
<p>Cuando la Tierra deja de hablar, solo los que escuchan pueden sembrar de nuevo.</p>
<div className="flecha-abajo">⌄</div>
</div>
</div>
</header>
    <Ignnis/>
    </>

  )
}
