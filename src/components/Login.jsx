import React, { useState } from 'react'
import { deleteRef, saveUsuario, updateUsuario, getData} from "../helpers/database";

import ProductosDataService from "../services/productos.service";


import { firebaseApp } from "../services/firebase";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import { doc, setDoc } from "firebase/firestore"

import { getDatabase, ref, set, onValue, remove } from "firebase/database";

const database = getDatabase();

const auth = getAuth(firebaseApp)

var handleDeleteClick = () => {
  deleteRef('productos/','-NG7jdp4WsEC7f5t_eqJ');
};

var handleCreateClick = () => {
  let data = {
    desc: 'Prueba Domingo',
    nombre: 'Prueba Domingo',
    precio: 1000,
    vendedor: 'erikxp@gmail.com'
  };
  ProductosDataService.create(data);
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
              
              
              ///console.log(ProductosDataService.getAll())

              /* let data = {
                desc: 'Prueba',
                nombre: 'Prueba',
                precio: 1000,
                vendedor: 'erikxp@gmail.com'
              };
              console.log('Entre')
              ProductosDataService.create(data) */



              //saveUsuario('usuarios/','Rooses','Pintos','rs@r.com')
              //updateUsuario('usuarios/', '-NG4zT0XmMc9Iaz8hyA4', 'Jos','zack','zoca@gmail.com')
              getData()
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
      <button title="create" aria-label="create" onClick={handleCreateClick}>
        Crear Producto
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

