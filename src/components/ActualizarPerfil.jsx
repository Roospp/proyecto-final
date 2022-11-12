import React from 'react'

const ActualizarPerfil = () => {
  return (
    <div className='actualizar-container'>

    <form className='form-actualizar'  >

    <div className='form-group col-20'> 
        <label htmlFor='full_name_id' className='control-label '></label>
        <input type='text' className='form-control' id='nombreActualizar' name='full_name' placeholder='Nombre' required />
    </div>    

    <div className="form-group col-20"> 
        <label htmlFor='street1_id' className='control-label '></label>
        <input type='text' className='form-control' id='apellidoActualizar' name='street1' placeholder='Apellido' required />
    </div>                    
                            
    <div className='form-group col-20'> 
        <label htmlFor='street2_id' className='control-label '></label>
        <input type='email' className='form-control' id='emailActualizar' name='street2' placeholder='Email' required />
    </div>    

    
    <div className='form-group col-20'> 
        <label htmlFor='zip_id' className='control-label'></label>
        <input type='text' className='form-control' id='passwordActualizar' name='zip' placeholder='Password' required/>
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