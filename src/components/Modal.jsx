import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function BotonModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button type="submit" className="buttonCSS" onClick={handleShow} >
        Agregar Producto
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>LLena los Campos</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
          <form className='form-modal'  >
          <div className='form-group col-10'>
            <label htmlFor='full_name_id' className='control-label '></label>
            <input type='text' className='form-control input-actualizar' id='nombreAgregar' name='full_name' placeholder='Nombre' required />
          </div>
          <div className='form-group col-10'>
            <label htmlFor='street2_id' className='control-label '></label>
            <input type='email' className='form-control' id='emailAgregar' name='street2' placeholder='Precio' required />
          </div>
          <div className='form-group col-10'>
            <label htmlFor='zip_id' className='control-label'></label>
            <input type='text' className='form-control' id='descipcionAgregar' name='zip' placeholder='Descipcion' required />
          </div>
          <div className='form-group col-10'>
            <label htmlFor='zip_id' className='control-label'></label>
            <input type='url' className='form-control' id='fotoActualizar' name='zip' placeholder='Url de foto' required />
          </div>
          <div className='form-group'>
          </div>
        </form>
        </Modal.Body>
        <Modal.Footer>
          <button className='button-interno-modal' onClick={handleClose}>
            Cancelar
          </button>
          <button className='button-interno-modal' onClick={handleClose}>
            Agregar
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default BotonModal;