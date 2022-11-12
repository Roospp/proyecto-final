import React, { useState, useEffect,useContext, navigate,} from 'react'
import UsuariosContext from "../context/UsuariosContext"





const Registrarse = () => {
    const {usuariosData, setUsuariosData} = useContext(UsuariosContext);

   
    const [sign, setSign] = useState();

    const endpoint = "../db/usuarios.json";
    
    const fetchData = async () => {
        const response = await fetch(endpoint);
        let usuarios = await response.json();
        setUsuariosData(usuarios);
    }
    useEffect(() =>{
        fetchData();
      
      }, []);
   


    const handlerRegistrar = async(e)=>{
        
        e.preventDefault();
       
        const email = e.target.emailRegistrar.value;
        const password = e.target.passwordRegistrar.value;
        const nombre = e.target.nombreRegistrar.value;
        const apellido = e.target.apellidoRegistrar.value;
        
        const data = {
            "usuarios": [{
                'email':email,
                'nombre':nombre,
                'apellido':apellido,
                'password':password,
            }]
        }
  
           
    
        setUsuariosData(data);
        
   
        
        /* const found = usuariosData.usuarios?.find((ingresar) => ingresar.email === data && ingresar.password === password);
        console.log(found)
        if(found){
            setSign(found)
            navigate("/perfil")
        }
        else{
            alert('Credenciales invalidas')
        } */
    }

  return (
    <div className='registro-container'>
    <h2 className='text-registro'>Registrate</h2>

<form className='form-registro' onSubmit={handlerRegistrar} >

    <div className='form-group col-4'> 
        <label htmlFor='full_name_id' className='control-label '></label>
        <input type='text' className='form-control' id='nombreRegistrar' name='full_name' placeholder='Nombre'/>
    </div>    

    <div className="form-group col-4"> 
        <label htmlFor='street1_id' className='control-label '></label>
        <input type='text' className='form-control' id='apellidoRegistrar' name='street1' placeholder='Apellido' required/>
    </div>                    
                            
    <div className='form-group col-4'> 
        <label htmlFor='street2_id' className='control-label '></label>
        <input type='email' className='form-control' id='emailRegistrar' name='street2' placeholder='Email' required />
    </div>    

    
    <div className='form-group col-4'> 
        <label htmlFor='zip_id' className='control-label'></label>
        <input type='text' className='form-control' id='passwordRegistrar' name='zip' placeholder='Password' required/>
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