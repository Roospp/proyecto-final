import React, { useEffect, useContext } from "react";  
import Cards from '../components/Cards'
import { Context } from "../context/Context";
import { useNavigate } from "react-router-dom";
import BuscadorYordenar from "../components/BuscarYordenar";


const Tienda = () => {
  const c = useContext(Context);
  useEffect(() => {
    c.setFilterresult(c.products)
  }, []);


  return (
    <div className='container-tienda'>
      
      <BuscadorYordenar/>
       <Cards />
    </div>
  )
}

export default Tienda