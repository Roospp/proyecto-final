import React, { useState, useEffect,useContext } from 'react'
import ActualizarPerfil from '../components/ActualizarPerfil'
import { Context } from '../context/Context'
import { useNavigate } from 'react-router-dom'

const Perfil = () => {
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
    <div className='perfil-container'>
      <h2 className='text-perfil'>Mi perfil</h2>
      <div className='container-act-perfil'>
      <div className='nombre-usuario'>
    <p>Nombre </p>
    <p>Apellido</p>
    <p>Email</p>
</div>
<div className='actualizar-container'>
      <ActualizarPerfil />
      </div>
    </div>
    </div>
  )
}

export default Perfil