import { getDatabase, onValue, set, ref, remove, push, get, child } from "firebase/database";
import { firebaseApp } from "../services/firebase";

// initialise database
const db = getDatabase(firebaseApp);



 export const deleteRef = (tabla, id) => {
    console.log(remove(ref(db, tabla+id)));
  }


  export const saveUsuario = (tabla, nombre, apellido, email) => {
    console.log(push(ref(db, tabla), {
        nombre: nombre,
        apellido: apellido,
        email : email
      }));
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
export const getData = () => {
  // Get a database reference to our posts


  let productos = [];
        onValue(ref(db, 'productos/'), (snapshot) => {  
             snapshot.forEach(function(childSnapshot) {
                var key = childSnapshot.key;
                var data = childSnapshot.val();
                
                productos.push({
                    key: key,
                    desc: data.desc,
                    nombre: data.nombre,
                    precio: data.precio,
                    vendedor: data.vendedor,
                  });

                
                // ...
              }
              
              ); 
              
              console.log(productos)
          });
  };

  
