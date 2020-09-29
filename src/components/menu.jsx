import React from 'react'
import './menu.css'
import Bienestar from '../imagenes/Bienestar.png'
import Perfil from '../imagenes/Perfil.png'
import Tareas from '../imagenes/Tareas.png'


const MenuLateral = () => {
  return (
    

  <aside className="MenuButton">
      <div className="MenuButtonChild1">
        <a href="/planificacion"> <img alt="" src={Tareas} /><br/>Planificación </a>
      </div>
      <div className="MenuButtonChild2">
        <a href="/bienestar"> <img alt="" src={Bienestar} /><br/>Bienestar  </a>
      </div>
      <div className="MenuButtonChild3">
        <a href="/perfil"><img alt="" src={Perfil} /><br/>Colaborador</a>
      </div>
    </aside>
    
  )
}

export default MenuLateral