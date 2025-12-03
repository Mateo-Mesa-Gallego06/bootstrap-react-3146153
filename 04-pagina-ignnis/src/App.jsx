import './App.css'
import { Ignnis } from './components/ignnis'

export const App = () => {
  return (
    <>
    <header className="header-ignnis d-flex justify-content-between align-items-center px-4 py-2">
      <div className="icon-group d-flex gap-3">
        <i className="bi bi-list"></i>
        <img className='logo-ignnis' src="./public/Logo-Ignnis-png.png" alt="" />
        <i className="bi bi-house"></i>
      </div>
      <div className="logo-center">
        <h1 className='title-ignnis'>IGNNIS</h1>
      </div>
      <div className="icon-group d-flex gap-3">
        <i className="bi bi-person"></i>
        <i className="bi bi-search"></i>
        <i className="bi bi-cart"></i>
      </div>
    </header>
    <Ignnis/>
    </>

  )
}
