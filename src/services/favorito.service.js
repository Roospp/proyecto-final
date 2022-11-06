import { getDatabase, onValue, set, ref, remove, push, get, child } from "firebase/database";
import { firebaseApp } from "./firebase";

// initialise database
const db = getDatabase(firebaseApp);

const refs = ref(db,"/productos");

class ProductosDataService {
  
    create(producto) {
        return push(refs, producto);
    }
}

export default new ProductosDataService();
