import React from "react";
import { Nav, Navbar,} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import  logo from "../assets/img/Control.png"
import "bootstrap/dist/css/bootstrap.min.css";

export default function NaBvar() {
  return (
    <Navbar collapseOnSelect expand="lg"   className="container-nabvar">
       <NavLink to='/' className="nav-link active">
        <img src={logo} alt="logo" className="logo" />
        </NavLink>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="text-container ">
          <NavLink to='/login' className="nav-link active text-nabvar">Login</NavLink>
          <NavLink to='/tienda' className="nav-link active text-nabvar">Tienda</NavLink>
          <NavLink to='/perfil' className="nav-link active text-nabvar">Perfil</NavLink>
          <NavLink to='/Favoritos' className="nav-link active text-nabvar">Favoritos</NavLink>
          <NavLink to='/publicaciones' className="nav-link active text-nabvar">Publicaciones</NavLink>
          <NavLink to='/productos' className="nav-link active text-nabvar">Productos</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
  







