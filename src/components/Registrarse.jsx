import React, { useEffect, useState } from "react";



const Registrarse = () => {
  const [listaUsuarios, setListaUsuarios] = useState([]);

  const UsuariosRender = async() =>{


    const url = '/db/usuarios.json';
    const response = await fetch(url);
    const data = await response.json()
    setListaUsuarios(data)
  }

  useEffect(() =>{
    UsuariosRender()
  }, [])
  
  return (
    <div>{listaUsuarios.map((item) => (
      <h1>{item.dni}</h1>
    ))}</div>
  )
}

export default Registrarse