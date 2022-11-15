import React, { useState, useEffect, useContext } from 'react'
import { Context } from '../context/Context'
import Heart from "./Heart";

const Cards = () => {
  const c = useContext(Context);

  const fetchData = async () => {
    const r2 = await fetch("../db/productos.json");
    let pd = await r2.json();
    c.setProducts(pd)
    
  }




  useEffect(() => {
    fetchData();
  }, []);


  let data = c.products

  if (c.busqueda.length) {
    data = c.filterresult
  }
  

  return (
    
    <div className='container-cards '>
      
    {
      
      
      data.map((p) => (
          <div className='individual-cards card' key={p.id}>
            <div className='card-body'>
            <img  src={p.img} className='foto-card' alt="..." />
            
              <h5 className='card-title'>{p.nombre}</h5>
              <p className='card-text'>{p.descripcion}</p>
              <p className='card-text'>{p.precio}</p>
              <Heart liked={p.liked} foto={p} />
              <button className='button-cards'>
                Comprar
              </button>
              <button className='button-cards'>
                Detalle
              </button>
     
            </div>
          </div>
        )

        )
      }



    </div>


  )
}

export default Cards