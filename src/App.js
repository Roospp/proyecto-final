import React, { useState ,useContext,useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import Tienda from "./views/Tienda";
import Perfil from "./views/Perfil";
import Favoritos from "./views/Favoritos";
import Publicaciones from "./views/Publicaciones";
import IniciarSesion from "./components/IniciarSesion";
import Registrarse from "./components/Registrarse";
import ContextProvider from "./context/Context";
import Footer from './components/Footer';



function App() {
 
  return (
    <div className="App">
      <ContextProvider>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/iniciarsesion" element={<IniciarSesion/>} />
          <Route path="/registrarse" element={<Registrarse/>} />
          <Route path="/perfil" element={<Perfil/>} />
          <Route path="/tienda" element={<Tienda/>} />
          <Route path="/favoritos" element={<Favoritos/>} />
          <Route path="/publicaciones" element={<Publicaciones/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;
