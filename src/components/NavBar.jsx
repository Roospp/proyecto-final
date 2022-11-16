import React, { useState, useEffect,useContext } from 'react'
import { Nav, Navbar,} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import  logo from "../assets/img/Control.png"
import "bootstrap/dist/css/bootstrap.min.css";
import { Context } from '../context/Context'
import toast, { Toaster } from 'react-hot-toast';



export default function NaBvar() {
  const c = useContext(Context)


  return (
    <div className="navbar-color">
    <Navbar collapseOnSelect expand="lg" >
       <NavLink to='/' className="nav-link active">
        <img src={logo} alt="logo" className="logo" />
        </NavLink>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="text-container ">
          {c.sign.email?(
              <Nav className="text-container ">
                <NavLink to='/perfil' className="nav-link active text-nabvar">Perfil</NavLink>
                <NavLink to='/Favoritos' className="nav-link active text-nabvar">Favoritos</NavLink>
                <NavLink to='/publicaciones' className="nav-link active text-nabvar">Publicaciones</NavLink>
                <NavLink to='/tienda' className="nav-link active text-nabvar">Tienda</NavLink>
              </Nav>
          ):(
              
            <Nav className="text-container ">
              <NavLink to='/iniciarSesion' className="nav-link active text-nabvar">Iniciar Sesion</NavLink>
              <NavLink to='/registrarse' className="nav-link active text-nabvar">Registrarse</NavLink>
            </Nav>
          )
        }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
  );
}
  








