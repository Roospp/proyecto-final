import React, { useState } from 'react'
import { deleteRef, saveUsuario, updateUsuario, getData} from "../helpers/database";




import { firebaseApp } from "../services/firebase";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import { doc, setDoc } from "firebase/firestore"

import { getDatabase, ref, set, onValue, remove } from "firebase/database";

const database = getDatabase();

const auth = getAuth(firebaseApp)

var handleDeleteClick = () => {
  deleteRef('usuarios/','-NG4z__m0I6FhJaGJwhM');
};



const Login = () => {
    const [registrando, setRegistrando] = useState(false)

    const handlerSubmit = async(e)=>{
        e.preventDefault();
        const correo = e.target.email.value;
        const contraseña = e.target.password.value;
    
        if(registrando){
            await createUserWithEmailAndPassword(auth, correo, contraseña)
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
              
         
              

              
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              alert(errorMessage)
            });
        }
        else{
       
      
          await signInWithEmailAndPassword(auth, correo, contraseña)
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
              console.log(user)
              
              //saveUsuario('usuarios/','Rooses','Pintos','rs@r.com')
              //updateUsuario('usuarios/', '-NG4zT0XmMc9Iaz8hyA4', 'Jos','zack','zoca@gmail.com')
              //getData('usuarios/-NG4zT0XmMc9Iaz8hyA4')
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              alert(errorMessage)
            });
          
           
        }
    }




  return (
    <div className='login-container'>
    <div className="col-md-4 ">
    <button title="delete" aria-label="delete" onClick={handleDeleteClick}>
        Delete field
      </button>
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

