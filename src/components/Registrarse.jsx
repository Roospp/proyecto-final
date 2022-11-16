import React, { useEffect, useContext, } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../context/Context';
import toast, { Toaster } from 'react-hot-toast';

const Registrarse = () => {
    const c = useContext(Context);
   
    const navigate = useNavigate();
    
    const handlerRegistrar = async (e) => {

        e.preventDefault();

        const data = {
            'id': e.target.emailRegistrar.value,
            'email': e.target.emailRegistrar.value,
            'nombre': e.target.nombreRegistrar.value,
            'apellido': e.target.apellidoRegistrar.value,
            'password': e.target.passwordRegistrar.value,
            'img': e.target.fotoRegistrar.value,
        }

        c.setUser(u => [...u, data])

        toast.success('Usuario registrado!')

        navigate("/iniciarSesion")
    }


    return (

        <div className='registro-container'>
            <h2 className='text-registro'>Registrate</h2>
            <form className='form-registro' onSubmit={handlerRegistrar} >
                <div className='form-group col-4'>
                    <label htmlFor='full_name_id' className='control-label '></label>
                    <input type='text' className='form-control' id='nombreRegistrar' name='full_name' placeholder='Nombre' />
                </div>
                <div className="form-group col-4">
                    <label htmlFor='street1_id' className='control-label '></label>
                    <input type='text' className='form-control' id='apellidoRegistrar' name='street1' placeholder='Apellido' required />
                </div>
                <div className='form-group col-4'>
                    <label htmlFor='street2_id' className='control-label '></label>
                    <input type='email' className='form-control' id='emailRegistrar' name='street2' placeholder='Email' required />
                </div>
                <div className='form-group col-4'>
                    <label htmlFor='zip_id' className='control-label'></label>
                    <input type='text' className='form-control' id='passwordRegistrar' name='zip' placeholder='Password' required />
                </div>
                <div className='form-group col-4'>
                    <label htmlFor='zip_id' className='control-label'></label>
                    <input type='url' className='form-control' id='fotoRegistrar' name='zip' placeholder='Url foto' required />
                </div>
                <div className='form-group'>
                    <button type="submit" className="buttonCSS">
                        Registrarse
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Registrarse