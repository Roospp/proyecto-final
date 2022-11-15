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
      <p>Favoritos de {c.sign.nombre}</p>
    
    </div>
        <div className='container-cards '>
      
    {
      data.map((p) => (
          <div className='individual-cards card' key={p.id}>
            <div className='card-body'>
            <img  src={p.img} className='foto-card' alt="..." />
            
              <h5 className='card-title'>{p.nombre}</h5>
              <p className='card-text'>{p.descripcion}</p>
              <div className='botones-card'>
              <Heart className='iconos' liked={p.liked} foto={p} />
              <i className="fa-regular fa-credit-card icono-pagar"></i>
              <i className="fa-solid fa-circle-info icono-Info"></i>
              </div>
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