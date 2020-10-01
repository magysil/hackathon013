import React from 'react'
import './menu.css'
import Bienestar from '../imagenes/Bienestar.svg'
import Perfil from '../imagenes/Perfil.svg'
import Tareas from '../imagenes/Tareas.svg'
import Metricas from '../imagenes/Metricas.svg'


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
      <div className="MenuButtonChild4">
        <a href="/perfil"><img alt="" src={Metricas} /><br/>Metricas </a>
      </div>
    </aside>
    
  )
}

export default MenuLateral