import { useContext, useState } from "react"
import { Context } from '../context/Context'
import toast from 'react-hot-toast';

export default function Heart({ liked, foto }) {
  const c = useContext(Context);
  
  const [filled, setFilled] = useState(liked)

 
  

  const agregarFavoritos = (foto) =>{
    let {id} = foto
    const indice = c.products.findIndex(elemento => elemento.id === id)
    let corazon = c.products[indice].liked = true
    setFilled(corazon)
    const agregar_foto = [...c.productsFavoritos, foto]
    c.setProductsFavoritos(agregar_foto)
    toast.success('Se agrego a favoritos!')
  }


  const quitarFavoritos = (foto) =>{
    const {liked, id} = foto
    let indiceExistente = c.productsFavoritos.findIndex(favorito => favorito.id === id)
    c.productsFavoritos.splice(indiceExistente, 1)
    const indiceCorazon = c.products.findIndex(elemento => elemento.id === id)
    let corazon = c.products[indiceCorazon].liked = false
    setFilled(corazon)
    const agregar_foto = c.productsFavoritos
    c.setProductsFavoritos(agregar_foto)
    toast.success('Se elimino de favoritos!')
  }

  return (
    <>
      <svg width="40px" viewBox="0 0 24 24" onClick={() => filled ?  quitarFavoritos(foto): agregarFavoritos(foto)}  >
        <path
          fill={filled ? "red" : "white"}
          d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
        />
      </svg>
    </>
  );
}