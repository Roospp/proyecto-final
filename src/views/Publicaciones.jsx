import React, { useState, useEffect,useContext } from 'react'
import AgregarProducto from '../components/AgregarProducto'
import  {Context}  from '../context/Context'
import { useNavigate } from 'react-router-dom'
import Modal from '../components/Modal'

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
      <h2 className='text-publicaciones'>Mis productos</h2>
      <Modal/>
      </div>
  )
}

export default Publicaciones