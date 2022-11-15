import React, { Children, createContext,useEffect,useState, useContext } from "react";  
import Cards from '../components/Cards'
import { Context } from "../context/Context";
import { useNavigate } from "react-router-dom";
import BuscadorYordenar from "../components/BuscarYordenar";


const Tienda = () => {

  const c = useContext(Context);
  const navigate = useNavigate();

  const fetchData = async () => {
    {c.sign.email?(
      <div></div>
    ):(
      navigate("/iniciarSesion")
    )}
  }

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div className='container-tienda'>
      
      <BuscadorYordenar/>
       <Cards />
    </div>
  )
}

export default Tienda