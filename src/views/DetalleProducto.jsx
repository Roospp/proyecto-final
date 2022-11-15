import React,{ useContext, useState, useEffect } from "react"
import { Context } from "../context/Context";
import { useNavigate } from 'react-router-dom'

const DetalleProducto = () => {
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
    <div>DetalleProducto</div>
  )
}

export default DetalleProducto