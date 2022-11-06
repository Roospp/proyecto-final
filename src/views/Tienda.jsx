import React from 'react'
import Cards from '../components/Cards'
import ListProductos from '../components/ListProductos'

const Tienda = () => {
  return (
    <div className='container-tienda'>
      <div>
        <Cards />
        <ListProductos />
      </div>
    </div>
  )
}

export default Tienda