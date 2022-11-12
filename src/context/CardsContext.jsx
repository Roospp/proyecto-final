import { Children, createContext,useEffect,useState } from "react";  


const CardsContext = createContext({});

export const Provider = ({Children}) => {

    //* Estados a utilizar
    const [pruductos, setProductos] = useState([])
    const [productoFavoritos, setProductoFavoritos] = useState([])


    //* Contantes para englobar los estados
 const globalProductos = {pruductos, setProductos}
 const globalProductoFavoritos = {
    productoFavoritos, 
    setProductoFavoritos
}



//* llamada al enpoint de los productos
 const cardsRender = async() => {

    const endpoint = "../db/productos.json";
      const response = await fetch(endpoint);
      let {dataproductos} = await response.json();
      setProductos(dataproductos);
      console.log('Entreeeeee')
      console.log(pruductos)
    }
    
    
  
  
  //* usando el efecto para mostrar las fotos por pantalla cuando inicie el componente
    useEffect(() =>{
        cardsRender();
  
  }, []);

//* llamando los valores de las contantes para luego utilizar de manera global con el useContext
return <CardsContext.Provider value={{globalProductos,globalProductoFavoritos}} >{Children}</CardsContext.Provider>;



};

export default CardsContext;
