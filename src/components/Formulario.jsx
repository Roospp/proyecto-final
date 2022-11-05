import React from 'react'

const Formulario = () => {
  return (
    <div className='perfil-container'>
    <h2 className='text-perfil'>Perfil</h2>

<form className='form-container'>

    <div className="form-group"> 
        <label for="full_name_id" className="control-label "></label>
        <input type="text" className="form-control" id="nombre" name="full_name" placeholder="Nombre"/>
    </div>    

    <div className="form-group"> 
        <label for="street1_id" className="control-label "></label>
        <input type="text" className="form-control" id="apellido" name="street1" placeholder="Apellido"/>
    </div>                    
                            
    <div className="form-group"> 
        <label for="street2_id" className="control-label "></label>
        <input type="email" className="form-control" id="email" name="street2" placeholder="Email"/>
    </div>    

    <div className="form-group"> 
        <label for="city_id" className="control-label"></label>
        <input type="text" className="form-control" id="direccion" name="city" placeholder="Direccion"/>
    </div>                                    
                            
   
    
    <div className="form-group"> 
        <label for="zip_id" class="control-label"></label>
        <input type="text" className="form-control" id="password" name="zip" placeholder="Password"/>
    </div>        
    
    <div className="form-group"> 
        <button type="submit" className="btn btn-primary">Actualizar!</button>
    </div>     
    
</form>

  </div>
  
  )
  }

export default Formulario;