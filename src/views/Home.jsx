import React, { useContext,useEffect } from 'react'
import { Context } from '../context/Context'
import Carusel from '../components/Carusel'
import { useNavigate } from 'react-router-dom'




const Home = () => {
  const c = useContext(Context)

 
  return (
    <div className='home-container'>
      <h1 className='d-block w-100'>Hola <span>{c.sign.nombre} {c.sign.apellido} </span>Bienvenido  a  Roos  Games!</h1>
      <Carusel/>
    </div> 
  )
}

export default Home