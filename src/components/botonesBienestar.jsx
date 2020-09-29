import React from 'react'
import './botonesBienestar.css'
import Rectangle from '../imagenes/Rectangle.png'



const BotonesBienestar = () => {
  return (
    

  <div className="BotonesBienestar">
      <div className="BotonesBienestarChild1">
        <a href=""> <img alt="" src={Rectangle} /> Estrés </a>
      </div>
      <div className="BotonesBienestarChild2">
        <a href=""> <img alt="" src={Rectangle} /> Ansiedad  </a>
      </div>
      <div className="BotonesBienestarChild3">
        <a href=""><img alt="" src={Rectangle} /> Motivación</a>
      </div>
      <div className="BotonesBienestarChild4">
        <a href=""><img alt="" src={Rectangle} /> Confianza</a>
      </div>      
      <div className="BotonesBienestarChild5">
        <a href=""><img alt="" src={Rectangle} /> Enfoque</a>
      </div>      

    </div>
    
  )
}

export default BotonesBienestar