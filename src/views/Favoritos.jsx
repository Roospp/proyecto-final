import React,{ useContext, useState, useEffect } from "react"
import { Context } from "../context/Context";
import Heart from "../components/Heart";
import { useNavigate } from 'react-router-dom'
import ModalDetalleProducto from '../components/ModalDetalleProducto'

const Favoritos = () => {
  const c = useContext(Context);
  let data = c.productsFavoritos
  
  const navigate = useNavigate();

  const fetchData = async () => {
    {c.sign.email?(
      <div></div>
    ):(
      navigate("/home")
    )}
    

  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className='favoritos-container'>
      <div className="nombre-usuario">
      <p>Favoritos de {c.sign.nombre}</p>
    
    </div>
        <div className='container-cards '>
      
    {
      data.map((p) => (
          <div className='individual-cards card' key={p.id}>
            <div className='card-body'>
            <img  src={p.img} className='foto-card' alt="..." />
            
              <h5 className='card-title'>{p.nombre}</h5>
              <p className='card-text'>{p.descripcion}</p>
              <p className='card-text'>$ {p.precio}</p>
              <div className='botones-card'>
              <Heart className='iconos' liked={p.liked} foto={p} />
              <i className="fa-regular fa-credit-card icono-pagar"></i>
              <ModalDetalleProducto p={p}/>
              </div>
            </div>
          </div>
        )
        )
      }
</div>
    </div>
  )
}

export default Favoritos