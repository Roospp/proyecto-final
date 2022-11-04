import React, { useState } from 'react'





import firebaseApp from '../credenciales'
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
const auth = getAuth(firebaseApp)



const Login = () => {
    const [registrando, setRegistrando] = useState(false)

    const handlerSubmit = async(e)=>{
        e.preventDefault();
        const correo = e.target.email.value;
        const contraseña = e.target.password.value;

        if(registrando){
            await createUserWithEmailAndPassword(auth, correo, contraseña)
        }
        else{
            await signInWithEmailAndPassword(auth, correo, contraseña)
        }
    }




  return (
    <div className='login-container'>
    <div className="col-md-4 ">
          <div className=" mt-5 ms-5">
            <h2 className='text-login '>{registrando ? "Registrate" : "Inicia sesión"}</h2>
            <form className="card card-body" onSubmit={handlerSubmit}>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder="ingresar email"
                  id="email"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="ingresa la contraseña"
                  id="password"
                />
              </div>

              <button type="submit" className="btn btn-primary">
                {registrando ? "Registrate" : "Inicia sesión"}
              </button>
            </form>

            <div className="form-group">
              <button
                className="btn btn-secondary mt-4 form-control"
                onClick={() => setRegistrando(!registrando)}
              >
                {registrando
                  ? "Ya tienes cuenta? Inicia sesion"
                  : "no tienes cuenta? Registrate"}
              </button>
            </div>
          </div>
        </div>
        </div>
  )
}

export default Login

