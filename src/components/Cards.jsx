import React, { useState, useEffect,useContext } from 'react'
import { Context } from '../context/Context'

const Cards = () => {
  const c = useContext(Context);

  const fetchData = async () => {
    const r2 = await fetch("../db/productos.json");
    let pd = await r2.json();
    c.setProducts(pd) 
  }

  const handlerGuardarFavoritos = async(e)=>{
    e.preventDefault();

    const email = c.sign.email;
    console.log(e.target)

  }

useEffect(() => {
  fetchData();
}, []);
  

    return (
        <div className='container-general'>
        <div className="container">
       
    {
        c.products.map((p)=>(
          
          <div className="card">
          <div className="imgBx">
            <img src={p.img} alt=""/>
          </div>
          <div className="details">
          
            <div className="content">
      
              <button className='button-cards'>
                Comprar
              </button>  
              <button className='button-cards'>
                Ver Detalle
              </button>
              <button className='button-cards' onClick={handlerGuardarFavoritos}>
                Favoritos
              </button>
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

export default Cards