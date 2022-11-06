import { getDatabase, onValue, set, ref, remove, push, get, child } from "firebase/database";
import { firebaseApp } from "../services/firebase";

// initialise database
const db = getDatabase(firebaseApp);

const refs = ref(db,"/productos");

class ProductosDataService {
    getAll() {
        let productos = [];
        onValue(refs, (snapshot) => {  
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
    }
  
    create(producto) {
        return push(refs, producto);
    }
}

export default new ProductosDataService();
