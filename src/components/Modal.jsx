import React, { useState, useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Context } from '../context/Context';
import toast from 'react-hot-toast';

function BotonModal() {
  const c = useContext(Context);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handlerGuardar = async (e) => {
    e.preventDefault();

    const data = {
      'id': 25,
      'nombre': e.target.nombreAgregar.value,
      'precio': e.target.precioAgregar.value,
      'descripcion': e.target.descipcionAgregar.value,
      'img': e.target.fotoAgregar.value,
      'liked': false,
      'email': c.sign.email
    }

    c.setProducts(p => [...p, data])
    c.setFilterresult(p => [...p, data])

    toast.success('Producto registrado!')

    handleClose()
  }

  return (
    <>
      <button type="submit" className="buttonCSS" onClick={handleShow} >
        Agregar Producto
      </button>
      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton className='modal-add-producto'>
          <Modal.Title>LLena los Campos</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal-add-producto'>
          <form className='form-modal' onSubmit={handlerGuardar} >
            <div className='form-group col-12'>
              <label htmlFor='full_name_id' className='control-label '></label>
              <input type='text' className='form-control input-actualizar' id='nombreAgregar' name='full_name' placeholder='Nombre' required />
            </div>
            <div className='form-group col-12'>
              <label htmlFor='street2_id' className='control-label '></label>
              <input type='number' className='form-control' id='precioAgregar' name='street2' placeholder='Precio' required />
            </div>
            <div className='form-group col-12'>
              <label htmlFor='zip_id' className='control-label'></label>
              <input type='text' className='form-control' id='descipcionAgregar' name='zip' placeholder='Descipcion' required />
            </div>
            <div className='form-group col-12'>
              <label htmlFor='zip_id' className='control-label'></label>
              <input type='url' className='form-control' id='fotoAgregar' name='zip' placeholder='Url de foto' required />
            </div>
            <div className='form-group'>
              <button type="submit" className="buttonCSS">
                Agregar
              </button>
              <button className='buttonCSS' onClick={handleClose}>
                Cancelar
              </button>
            </div>
          </form>
        </Modal.Body>

      </Modal>
    </>
  );
}

export default BotonModal;