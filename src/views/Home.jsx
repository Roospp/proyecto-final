import React, { useState, useEffect,useContext } from 'react'
import { Context } from '../context/Context'
const Home = () => {
  const c = useContext(Context)


  return (
    <div className='home-container'>
      <h1>Hola {c.sign.nombre} a RoosPP Games!</h1>
    </div>
  )
}

export default Home