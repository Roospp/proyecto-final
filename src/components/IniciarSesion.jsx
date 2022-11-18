import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../context/Context'
import toast from 'react-hot-toast';


const IniciarSesion = () => {
  const c = useContext(Context);

  const navigate = useNavigate();
  
    const handlerSubmit = async(e)=>{
        e.preventDefault();
        const correo = e.target.email.value;
        const password = e.target.password.value;
        const found = c.user?.find((ingresar) => ingresar.email === correo && ingresar.password === password);
        if(found){
            c.setSign(found)
            toast.success('Session iniciada!')
            navigate("/home")
        }
        else{
            alert('Credenciales invalidas')
        }
    }


  return (
    <div className='iniciarSesion-container'>
            <h2 className='text-iniciarSesion '>Iniciar Sesion</h2>
            <form className=" form-iniciarSesion" onSubmit={handlerSubmit}>
              <div className="form-group col-4">
                <input
                  type="email"
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder="ingresar email"
                  id="email"
                />
              </div>
              <div className="form-group col-4">
                <input
                  type="password"
                  className="form-control"
                  placeholder="ingresa la contraseña"
                  id="password"
                />
              </div>
              <div className='form-group'> 
              <button type="submit" className="buttonCSS">
                Iniciar Sesion
              </button>
              </div>
            </form>
        </div>
  )
}

export default IniciarSesion