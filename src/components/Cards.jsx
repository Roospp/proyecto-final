import React, { useState, useEffect, useContext } from 'react'
import { Context } from '../context/Context'
import Heart from "./Heart";
import ModalDetalleProducto from './ModalDetalleProducto'


const Cards = () => {
  const c = useContext(Context);
  
  let data =null;
  if((window.location.href.indexOf("/tienda") != -1) && (c.filterresult.length<=0) && (c.busqueda=='')){
    data = c.products
  }else{
    data = c.filterresult
  }

  

  return (
    
    <div className='container-cards'>
      
      {
      
      
       data.map((p) => (
          <div className='individual-cards card fondo-card ' key={p.id}>
            <div className='card-body'>
              <img  src={p.img} className='foto-card' alt="..." />
            
              <h5 className='card-title card-text'>{p.nombre}</h5>
              <p className='card-text'>{p.descripcion}</p>
              <p className='card-text'>$ {p.precio.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}</p>
              <div className='botones-card'>
              <Heart className='iconos' liked={p.liked} foto={p} />
              <i className="fa-regular fa-credit-card icono-pagar"></i>
              
            <ModalDetalleProducto p={p} />
              
              </div>
     
            </div>
          </div>
        )
        
        )
      }



    </div>


  )
}

export default Cards