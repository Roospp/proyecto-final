import { getDatabase, onValue, set, ref, remove, push, get, child } from "firebase/database";
import { firebaseApp } from "./firebase";

// initialise database
const db = getDatabase(firebaseApp);

const refs = ref(db,"/favoritos/");

class FavoritosDataService {
  
    create(favorito) {
        return push(refs, favorito);
    }

    delete(id){
        remove(refs+id);
    }

    exist(favorito) {
        refs.isEqual.once(favorito).then(function(snapshot) {
            var a = snapshot.exists();
            console.log(a)  
        });
    }
}

export default new FavoritosDataService();
