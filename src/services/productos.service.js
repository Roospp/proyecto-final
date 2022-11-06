import { getDatabase, onValue, set, ref, remove, push, get, child } from "firebase/database";
import { firebaseApp } from "./firebase";

// initialise database
const db = getDatabase(firebaseApp);

const refs = ref(db,"/productos");

class ProductosDataService {
  
    create(producto) {
        console.log('Creando')
       return push(ref(db,"/productos"), producto);
    }

    delete(id){
        remove(ref(db,"/productos/"+id));
    }
}

export default new ProductosDataService();
