import React, { useState ,useContext,useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import Tienda from "./views/Tienda";
import DetalleProducto from "./views/DetalleProducto";
import Perfil from "./views/Perfil";
import Favoritos from "./views/Favoritos";
import Publicaciones from "./views/Publicaciones";
import IniciarSesion from "./components/IniciarSesion";
import Registrarse from "./components/Registrarse";
import ContextProvider from "./context/Context";



function App() {
 
  return (
    <div className="App">
      <ContextProvider>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/Iniciarsesion" element={<IniciarSesion/>} />
          <Route path="/Registrarse" element={<Registrarse/>} />
          <Route path="/perfil" element={<Perfil/>} />
          <Route path="/tienda" element={<Tienda/>} />
          <Route path="/detalleProducto" element={<DetalleProducto/>} />
          <Route path="/favoritos" element={<Favoritos/>} />
          <Route path="/publicaciones" element={<Publicaciones/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;
