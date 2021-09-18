import React, { useState } from 'react'
import Select, { components } from 'react-select'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

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

const Reserva = () => {
  const [origen, setOrigen] = useState(null)
  const [destino, setDestino] = useState(null)
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  console.log(origen)
  return (
    <>
      <form>
        <div className="mainInput__fechas">
          <input type="checkbox" name="tipoVuelo" id="tipoVuelo" />
          <label htmlFor="tipoVuelo">Vuelo solo de ida</label>
          <Select 
            defaultValue={origen}
            onChange={setOrigen}
            className="autocomplete origen-input"
            placeholder="Lugar de origen"
            isClearable
            isSearchable
            options={ciudades}
            getOptionValue={ option => option.ciudad}
            getOptionLabel={ option => `${option.iata} - ${option.ciudad} - ${option.nombre}`}
            isOptionDisabled={ option => option === destino }
          />
           <Select 
            defaultValue={destino}
            onChange={setDestino}
            className="autocomplete destino-input"
            placeholder="Lugar de destino"
            isClearable
            isSearchable
            options={ciudades}
            getOptionValue={ option => option.ciudad}
            getOptionLabel={ option => `${option.iata} - ${option.ciudad} - ${option.nombre}`}
            isOptionDisabled={ option => option === origen }
          /> 
          <div className="date-input">
            <DatePicker
              selected={startDate}
              onChange={ date => setStartDate(date)}
              isClearable
              selectsStart
              startDate={startDate}
              endDate={endDate}
              placeholderText="Fecha de ida"
            />
            <DatePicker
              selected={endDate}
              onChange={ date => setEndDate(date)}
              isClearable
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              placeholderText="Fecha de regreso"
            />
          </div>
        </div>
       
        <button type="submit">BUscar Vuelos</button>
      </form>
    </>
  )
}

export default Reserva