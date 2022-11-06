import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Context from "./Context";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import Tienda from "./views/Tienda";
import DetalleProducto from "./views/DetalleProducto";
import Perfil from "./views/Perfil";
import Favoritos from "./views/Favoritos";
import Publicaciones from "./views/Publicaciones";
import Login from "./components/Login";
import Formulario from "./components/Formulario";

import { firebaseApp } from "./services/firebase";
import {getAuth, onAuthStateChanged} from 'firebase/auth'

import TutorialsList from "./components/ListProductos";
import ListProductos from './components/ListProductos';

const auth = getAuth(firebaseApp)

function App() {
  const [usuario, setUsuario] = useState(null)

  const [productos, setProductos] = useState(null)

  onAuthStateChanged(auth, (usuarioFirebase)=>{
    if(usuarioFirebase){
      setUsuario(usuarioFirebase)
    }
    else{
      setUsuario(null)
    }
  })
  return (
    <div className="App">
     <Context.Provider value={{}}>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/tienda" element={<Tienda/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/detalleProducto" element={<DetalleProducto/>} />
          <Route path="/perfil" element={<Perfil/>} />
          <Route path="/favoritos" element={<Favoritos/>} />
          <Route path="/publicaciones" element={<Publicaciones/>} />
          <Route path="/productos" element={<ListProductos/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;
