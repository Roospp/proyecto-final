import { useContext, useState } from "react"
import { Context } from "../context/Context";
import Heart from "../components/Heart";

const Favoritos = () => {
  const c = useContext(Context);
  let data = c.productsFavoritos
  console.log(data)
  return (
    <div className='favoritos-container'>
      <div className="nombre-usuario">
      <p>Favoritos de Usuario {c.sign.nombre}</p>
    
    </div>
        <div className='container-cards '>
      
    {
      data.map((p) => (
          <div className='individual-cards card' key={p.id}>
            <div className='card-body'>
            <img  src={p.img} className='foto-card' alt="..." />
            
              <h5 className='card-title'>{p.nombre}</h5>
              <p className='card-text'>{p.descripcion}</p>
              <Heart liked={p.liked} foto={p} />
              <button className='button-cards'>
                Comprar
              </button>
              <button className='button-cards'>
                Detalle
              </button>
            </div>
          </div>
        )
        )
      }
</div>
    </div>
  )
}

export default Favoritos