import { getDatabase, onValue, set, ref, remove, push, get, child } from "firebase/database";
import { firebaseApp } from "../services/firebase";

// initialise database
const db = getDatabase(firebaseApp);



 export const deleteRef = (tabla, id) => {
    remove(ref(db, tabla+id)).then(() => {
      console.log("location removedddddddd");
    });
  }


  export const saveUsuario = (tabla, nombre, apellido, email) => {
    push(ref(db, tabla), {
        nombre: nombre,
        apellido: apellido,
        email : email
      })
      console.log("Guardo");
    
  }

  export const updateUsuario = (tabla, id, nombre, apellido, email) => {
    set(ref(db, tabla+id), {
        nombre: nombre,
        apellido: apellido,
        email : email
      })
      console.log("Actualizo");
    
  }

  // read operation with observer
export const getData = (tabla) => {
    get(child(ref(db, tabla))).then((snapshot)=>{
        console.log(snapshot)
    })
  };

  
