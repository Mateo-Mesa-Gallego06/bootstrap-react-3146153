// Vamos a importar los estilos y el componente InfoCrad//
import { InfoCard } from "../components/InfoCard"
import { UserCard } from "../components/UserCard"
import { InfoPlayer } from "../components/ListaDeJugadores"
import "./App.css"


export function App () {
 return (
  <div>
    <h1>App</h1>
    <InfoCard/>
    <UserCard 
      image="https://rickandmortyapi.com/api/character/avatar/352.jpeg" 
      userName="Tinkles"/>
      <UserCard 
      image="https://rickandmortyapi.com/api/character/avatar/267.jpeg" 
      userName="Plumber Rick"/>
      <UserCard 
      image="https://rickandmortyapi.com/api/character/avatar/752.jpeg" 
      userName="Changerformer"/>
      <UserCard 
      image="https://rickandmortyapi.com/api/character/avatar/324.jpeg" 
      userName="Sleepy Gar"/>

    <h1>Barcelona 2014/15</h1>
    <InfoPlayer/>
    <UserCard 
      image="https://cdn.europosters.eu/image/750/28724.jpg"
      userName="Leo Mesi"/>
    <InfoPlayer/>
    <UserCard 
      image="https://www.globalprints.com/cdn/shop/products/SPT13221_3d29085c-dcb0-4b84-a18d-3f97f7891b6d_grande.jpg?v=1549462177" 
      userName="Neymar Jr"/>
    <InfoPlayer/>
    <UserCard 
      image="https://sportsposterwarehouse.com/cdn/shop/products/suarez16gb-1_large.jpg?v=1496331187" 
      userName="Luis Suarez"/>
  </div>
  
 )
}