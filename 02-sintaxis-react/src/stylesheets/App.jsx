import "./App.css"
import { NavBar } from '../components/NavBar'  
import { ExtensionCard } from '../components/ExtensionCard'
import { LoginForm } from "../components/LoginForm"
export const App = () => {
  return (
    <>
    <NavBar/>    
    <div className="containerCards">
    <ExtensionCard 
    cardTitle="DevLens" 
    cardImage="./public/imgLogo.png" 
    cardDescription="Quickly inspect page layouts and visualize element boundaries."
    />
    <ExtensionCard 
    cardTitle="StyleSpy" 
    cardImage="./public/save_4476550im2.png" 
    cardDescription="Instantly analyze and copy CSS from any webpage element."
    />
    <ExtensionCard 
    cardTitle="SpeedBoost" 
    cardImage="./public/setting_44772743.png" 
    cardDescription="Optimizes browser resource usage to accelerate page loading."
    />
    <ExtensionCard 
    cardTitle="JSONWizard" 
    cardImage="" 
    cardDescription="Formats, validates, and prettifies JSON responses in-browser."
    />
    <ExtensionCard 
    cardTitle="TabMaster Pro" 
    cardImage="" 
    cardDescription="Organizes browser tabs into groups and sessions."
    />
    <ExtensionCard 
    cardTitle="ViewportBuddy" 
    cardImage="" 
    cardDescription="Simulates various screen resolutions directly within the browser."
    />
    <ExtensionCard 
    cardTitle="Markup Notes" 
    cardImage="" 
    cardDescription="Enables annotation and notes directly onto webpages for collaborative debugging."
    />
    <ExtensionCard 
    cardTitle="GridGuides" 
    cardImage="" 
    cardDescription="Overlay customizable grids and alignment guides on any webpage."
    />
    <ExtensionCard 
    cardTitle="Palette Picker" 
    cardImage="" 
    cardDescription="Instantly extracts color palettes from any webpage."
    />
    </div>
    <h1>React + Bootstrap</h1>
    <LoginForm/>
    </>
  )
}
