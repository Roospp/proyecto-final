import React, { useState } from 'react';
import { useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Context } from '../context/Context';

function BotonModal() {
  const c = useContext(Context)

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>LLena los Campos</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
          <form className='form-modal'  >
          <div className='form-group col-12'>
            <img src="" alt="" />
            </div>
          <div className='form-group col-12'>
            <h4>Nombre Producto</h4>
          </div>
          <div className='form-group col-12'>
           <h4>precio producto</h4>
          </div>
          <div className='form-group col-12'>
           <h4>descripcion producto</h4>
          </div>
          <div className='form-group col-12'>
            <h4>Vendedor</h4>
          </div>
          <div className='form-group'>
          </div>
        </form>
        </Modal.Body>
        <Modal.Footer>
          <button className='button-interno-modal' onClick={handleClose}>
            Agregar Favorito
          </button>
          <button className='button-interno-modal' onClick={handleClose}>
            Comprar
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default BotonModal;