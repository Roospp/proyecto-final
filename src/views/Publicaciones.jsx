import React, { useState, useEffect,useContext } from 'react'
import  {Context}  from '../context/Context'
import { useNavigate } from 'react-router-dom'
import Modal from '../components/Modal'
import Cards from '../components/Cards'

const Publicaciones = () => {
  const c = useContext(Context);
  const navigate = useNavigate();

  const fetchData = async () => {
    {c.sign.email?(
      <div></div>
    ):(
      navigate("/iniciarSesion")
    )}

    let filtrarBusqueda = c.products.filter((p) => {
      return (
        p.email.toLowerCase().includes(c.sign.email.toLowerCase())
      );
    });

    c.setFilterresult(filtrarBusqueda);
  }
  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div className='publicaciones-container'>
      <Modal/>
      <div className='modal-card-publicaciones'>
      
      <Cards/>
      </div>
      </div>
  )
}

export default Publicaciones