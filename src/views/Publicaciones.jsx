import React from 'react'
import FormularioProducto from '../components/FormularioProducto'

const Publicaciones = () => {
  return (
    <div className='publicaciones-container'>
      <h2 className='text-publicaciones'>Productos</h2>
      <div className='text-publicaciones'>
      
        <FormularioProducto/>
      </div>
    </div>
  )
}

export default Publicaciones