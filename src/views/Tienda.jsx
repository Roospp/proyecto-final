import React, { Children, createContext,useEffect,useState, useContext } from "react";  
import Cards from '../components/Cards'


const Tienda = () => {

  return (
    <div className='container-tienda'>
      <div className='container-cards'>
    <Cards />
      </div>
    </div>
  )
}

export default Tienda