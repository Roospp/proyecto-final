import React, { useState, useEffect, useContext } from 'react'
import { Context } from "../context/Context";

const Buscador = () => {
    const c = useContext(Context);
  
    

    const filtrarProductos = (e) => {
        let valor_input = e.target.value;
        
        c.setBusqueda(e.target.value);
    
        let filtrarBusqueda = c.products.filter((p) => {
          return (
            p.nombre.toLowerCase().includes(valor_input.toLowerCase().replace(/\s/g, ''))
          );
        });
        c.setFilterresult(filtrarBusqueda);
      };

      
      return (
        <div className='input-group rounded'>
        <input type="search" className='form-control rounded' placeholder="Buscar juego por nombre" aria-label="Search" aria-describedby="search-addon" onChange={filtrarProductos}  value={c.busqueda}/>
        <span className='input-group-text border-0' id="search-addon">
          <i className='fas fa-search'></i>
        </span>
      </div>
      );
        };
    

export default Buscador;

