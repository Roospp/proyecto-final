import React from 'react'

const FormularioProducto = () => {
  return (
    
        <div className='form-producto-container'>
    <h2 className='text-producto'>Productos</h2>
        <form className='form-container'>

<div className='form-group'> 
    <label for='full_name_id' className='control-label '></label>
    <input type='text' className='form-control' id='nombre' name='name' placeholder='Nombre'/>
</div>    

<div className='form-group'> 
    <label for='street1_id' className='control-label '></label>
    <input type='number' className='form-control' id='apellido' name='street1' placeholder='precio'/>
</div>                    
                        
<div className='form-group'> 
    <label for='street2_id' className='control-label '></label>
    <input type='text' className='form-control' id='email' name='street2' placeholder='descripcion'/>
</div>    

                                 
                        
       

<div className='form-group'> 
    <button type='submit' className='btn btn-primary'>Agregar!</button>
</div>     

</form>
    </div>
  )
}

export default FormularioProducto