//libraries
import React, { useState } from "react";
//styles
import '../assets/styles/MainInput.css'

const MainInput = () => {
  const [selected, setSelected] = useState('vuelos');


  const handleClick = e => {
    //Esta función se encarga de cambiar el estado
    //con un condicional miro a qué tab le di click
    //también debe cambiar la clase del componente seleccionado, para que cambie su color
    console.log(e.target.id)
    if (e.target.id === 'vuelos'){
      setSelected('vuelos')
    } else if (e.target.id === 'checkin') {
      setSelected('checkin')
    } else if (e.target.id === 'reserva'){
      setSelected('reserva')
    }

  }

  return (
    <div className="mainInput">
      <div className="tabs-container">
        <div id="vuelos" className="mainInput__tab isSelected" onClick={handleClick}>Vuelos</div>
        <div id="checkin" className="mainInput__tab" onClick={handleClick}>Check-in</div>
        <div id="reserva" className="mainInput__tab" onClick={handleClick}>Mi Reserva</div>
      </div>
      <div className="input-container">
        {
          selected === 'vuelos' && 
          <h2>Acá debería ir el componente input para los vuelos</h2>
        }
        {
          selected === 'checkin' &&
          <h2>Acá debería ir el componente para hacer el check in </h2>
        }
        {
          selected === 'reserva' &&
          <h2>Acá debería ir el componente para hacer buscar una reserva </h2>
}
      </div>
    </div>
  )
}

export default MainInput