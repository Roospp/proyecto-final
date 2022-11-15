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
    <div className='container-buscador-option'>
      <div className='buscador'>
        <div className='search-box'>
          <button className='btn-search'><i className='fas fa-search'></i></button>
          <input type="text" className='input-search' placeholder="Buscador por nombres" onChange={filtrarProductos} value={c.busqueda} />
        </div>
      </div>
      <div className='select ' tabindex='1'>
        <input className='selectopt input' name="test" type="radio" id="opt1" />
        <label htmlFor="opt1" className="option">Ordenar por</label>
        <input className="selectopt input" name="test" type="radio" id="opt2" />
        <label htmlFor="opt2" className="option">Nombre</label>
        <input className="selectopt input" name="test" type="radio" id="opt3" />
        <label htmlFor="opt3" className="option">Precio</label>
        
      </div>
    </div>
  );
};


export default Buscador;

