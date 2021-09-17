import React, { useState } from 'react'
import Select, { components } from 'react-select'

//tengo que instalar el material ui lab. Importar el Autocomplete. Y revisar tree shaking.

//para las fechas, instalar el datepicker de react.

//diseñar primero como un componente para movil.

const ciudades = [
  { iata : 'BOG', ciudad: 'Bogotá', nombre: 'Aeropuerto el Dorado'},
  { iata : 'BAQ', ciudad: 'Barranquilla', nombre: 'Aeropuerto Ernesto Cortissoz'},
  { iata : 'CLO', ciudad: 'Cali', nombre: 'Aeropuerto Alfonso Bonilla Aragón'},
  { iata : 'CTG', ciudad: 'Cartagena', nombre: 'Aeropuerto Rafael Nuñez'},
  { iata : 'MDE', ciudad: 'Medellín', nombre: 'Aeropuerto José María Cordova'},
  { iata : 'ADZ', ciudad: 'San Andrés', nombre: 'Aeropuerto Gustavo Rojas Pinilla'},
  { iata : 'SMR', ciudad: 'Santa Marta', nombre: 'Aeropuerto Simón Bolivar'},
  { iata : 'BGA', ciudad: 'Bucaramanga', nombre: 'Aeropuerto Palonegro'}, 
]

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const nombresCiudades = ciudades.map( ciudad => ciudad.ciudad)
  //habría que mirar si hay alguna referencia a los aeropuertos

const Reserva = () => {
  const [desde, setDesde] = useState(ciudades[0])
  
  console.log(ciudades)
  return (
    <>
      <form>
        <div className="mainInput__fechas">
          <input type="checkbox" name="tipoVuelo" id="tipoVuelo" />
          <label htmlFor="tipoVuelo">Vuelo solo de ida</label>
          <Select 
            defaultValue={selectedOption}
            className="desde-input"
            // components={{option}}
            isClearable
            isSearchable
            options={ciudades}
            infoRender={}
          />
          
        </div>
       
          <button type="submit">BUscar Vuelos</button>
      </form>
    </>
  )
}

export default Reserva