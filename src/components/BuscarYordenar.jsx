import React, {  useContext } from 'react'
import { Context } from "../context/Context";

const Buscador = () => {
  const c = useContext(Context);

  const ordenar = (e) => {
    e.preventDefault();
    const o = e.target.childNodes[e.target.selectedIndex].getAttribute('id')

    c.setProducts(u => [...u].sort((a, b)=>{
      if (o=='opt1') {
        console.log('Nombre')
        return a.nombre > b.nombre ? 1:-1;
      }

      if (o=='opt2') {
        console.log('PRecio')
        return a.precio > b.precio ? 1:-1;
      }
      
    }))

    c.setFilterresult(u => [...u].sort((a, b)=>{
      if (o=='opt1') {
        console.log('Nombre')
        return a.nombre > b.nombre ? 1:-1;
      }

      if (o=='opt2') {
        console.log('PRecio')
        return a.precio > b.precio ? 1:-1;
      }
      
    }))

  }


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
          <button className='btn-search'><i className=' icon-color fa-solid fa-magnifying-glass'></i></button>
          <input type="text" className='input-search' placeholder="Buscador por nombres" onChange={filtrarProductos} value={c.busqueda} />
        </div>
      </div>
      
      {/* <div className='select' tabIndex='1' onChange={ordenar} id='cboordenar'>
        <input className='selectopt input' name="test" type="radio" id="opt1" />
        <label htmlFor="opt1" className="option">Ordenar por</label>
        <input className="selectopt input" name="test" type="radio" id="opt2" />
        <label htmlFor="opt2" className="option">Nombre</label>
        <input className="selectopt input" name="test" type="radio" id="opt3" />
        <label htmlFor="opt3" className="option">Precio</label>
        
      </div> */}
        <select className='select' name="cboordenar" id="cboordenar" onChange={ordenar}>
          <option value="volvo" id="opt0">Ordernar por...</option>
          <option value="volvo" id="opt1">Nombre</option>
          <option value="saab" id="opt2">Precio</option>
        </select>
    </div>
  );
};


export default Buscador;

