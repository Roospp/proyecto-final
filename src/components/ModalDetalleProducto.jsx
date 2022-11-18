import React, { useState } from 'react';
import { useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Context } from '../context/Context';
import Heart from "../components/Heart";

function ModalDetalleProducto({ p }) {
  const c = useContext(Context)

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
 
  return (
        <div key={p.id}>
     <i className="fa-solid fa-circle-info icono-Info" onClick={handleShow} />
      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton className='modal-add-producto'>
          <Modal.Title>Detalle De Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal-add-producto detalle-container'> 
          <form className='form-modal'  >
          <div className='form-group col-12'>
            <img className='foto-dt-modal' src={p.img} alt="" />
            </div>
          <div className='form-group col-12'>
            <h4>Nombre: {p.nombre}</h4>
          </div>
          <div className='form-group col-12'>
           <h4>Precio: {p.precio}</h4>
          </div>
          <div className='form-group col-12'>
           <h4>Descripcion: {p.descripcion}</h4>
          </div>
          <div className='form-group col-12'>
            <h4>Vendedor: {p.email}</h4>
          </div>
          <div className='form-group'>
          </div>
          <div className='container-icon-modal'>
          <Heart className='iconos' liked={p.liked} foto={p} />
          <i className="fa-regular fa-credit-card icono-pagar"></i>
          </div>
        </form>
        </Modal.Body>
          
      </Modal>
      </div>
      
      
  );
}

export default ModalDetalleProducto;