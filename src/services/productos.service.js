import { getDatabase, onValue, set, ref, remove, push, get, child } from "firebase/database";
import { firebaseApp } from "../services/firebase";

// initialise database
const db = getDatabase(firebaseApp);

const refs = ref(db,"/favoritos");

class FavoritosDataService {
  
    create(favotiro) {
        return push(refs, favotiro);
    }
}

export default new FavoritosDataService();
