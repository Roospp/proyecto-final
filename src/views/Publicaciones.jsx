import React, { useState, useEffect,useContext } from 'react'
import FormularioProducto from '../components/FormularioProducto'
import  {Context}  from '../context/Context'
import { useNavigate } from 'react-router-dom'

const Publicaciones = () => {
  const c = useContext(Context);
  const navigate = useNavigate();

  const fetchData = async () => {
    {c.sign.email?(
      <div></div>
    ):(
      navigate("/iniciarSesion")
    )}
  }

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div className='publicaciones-container'>
      <h2 className='text-publicaciones'>Productos</h2>
      <div className='text-publicaciones'>
      
        <FormularioProducto/>
      </div>
    </div>
  )
}

export default Publicaciones