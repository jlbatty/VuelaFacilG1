//libraries
import {React, useState } from "react";
//styles
import '../assets/styles/MainInput.css'

const MainInput = () => {
  const [selected, setSelected] = useState('vuelos');


  const handleClick = e => {
    //Esta función se encarga de cambiar el estado
    //con un condicional miro a qué tab le di click
    //también debe cambiar la clase del componente seleccionado, para que cambie su color
  }

  return (
    <div className="mainInput">
      <div className="tabs-container">
        <div className="mainInput__tab isSelected" onClick={handleClick}>Vuelos</div>
        <div className="mainInput__tab">Check-in</div>
        <div className="mainInput__tab">Mi Reserva</div>
      </div>
      <div className="input-container">
        {
          selected === 'vuelos' && 
          <h2>Acá debería ir el componente input para los vuelos</h2>
        }
      </div>
    </div>
  )
}

export default MainInput