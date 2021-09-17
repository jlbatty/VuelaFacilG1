//libraries
import React from 'react'
//styles
import '../assets/styles/Home.css'
//Components
import MainInput from '../components/MainInput'

//al inicio tengo que pedir como fetch la lista de ciudades, para renderizar el input
const Home = () => {
  return (
    <div>
      <MainInput />
    </div>
  )
}

export default Home