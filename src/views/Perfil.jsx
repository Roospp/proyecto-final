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
      <div className='container-act-perfil'>
      <img className='foto-perfil' src={c.sign.img} alt="" />
      <div className='nombre-usuario'>
    <p>{c.sign.nombre}</p>
    <p>{c.sign.apellido}</p>
    <p>{c.sign.email}</p>
</div>
<div className='actualizar-container'>
      <ActualizarPerfil />
      </div>
    </div>
    </div>
  )
}

export default Perfil