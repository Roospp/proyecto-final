import React, { useContext } from 'react'
import { Context } from '../context/Context'
import toast from 'react-hot-toast';


const ActualizarPerfil = () => {

    const c = useContext(Context);

    const handlerActualizar = async(e)=>{
        e.preventDefault();
        
          c.setUser([...c.user.map((o) =>
            o.id === c.sign.email ? { ...o,
                email: e.target.emailActualizar.value, 
                nombre:e.target.nombreActualizar.value,
                apellido:e.target.apellidoActualizar.value,
                password:e.target.passwordActualizar.value,
                img:e.target.fotoActualizar.value } : o
          ),
        ]);
        
        const u = {
            id:e.target.emailActualizar.value,
            email:e.target.emailActualizar.value,
            nombre:e.target.nombreActualizar.value,
            apellido:e.target.apellidoActualizar.value,
            password:e.target.passwordActualizar.value,
            img:e.target.fotoActualizar.value
        }
       
        c.setSign(u)
       
        toast.success('Datos actualizados!')
          
    }
    
  return (
    <div>
    <form className='form-actualizar' onSubmit={handlerActualizar} >
    <div className='form-group col-10'> 
        <label htmlFor='full_name_id' className='control-label '></label>
        <input type='text' className='form-control input-actualizar' id='nombreActualizar' name='full_name' placeholder='Nombre' defaultValue={c.sign.nombre} required />
    </div>    
    <div className="form-group col-10"> 
        <label htmlFor='street1_id' className='control-label '></label>
        <input type='text' className='form-control' id='apellidoActualizar' name='street1' placeholder='Apellido' defaultValue={c.sign.apellido} required />
    </div>                    
    <div className='form-group col-10'> 
        <label htmlFor='street2_id' className='control-label '></label>
        <input type='email' className='form-control' id='emailActualizar' name='street2' placeholder='Email' defaultValue={c.sign.email} required />
    </div>    
    <div className='form-group col-10'> 
        <label htmlFor='zip_id' className='control-label'></label>
        <input type='text' className='form-control' id='passwordActualizar' name='zip' placeholder='Password' defaultValue={c.sign.password} required/>
    </div>        
    <div className='form-group col-10'> 
        <label htmlFor='zip_id' className='control-label'></label>
        <input type='url' className='form-control' id='fotoActualizar' name='zip' placeholder='Url de foto' defaultValue={c.sign.img} required/>
    </div>        
    <div className='form-group'> 
    <button type="submit" className="buttonCSS" >
Actualizar                
 </button>
    </div>     
</form>
</div>
  )
}

export default ActualizarPerfil