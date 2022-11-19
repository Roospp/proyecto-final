import React, {useState, useEffect} from "react";

export const Context = React.createContext({})

export default function ContextProvider({children}){
    const [user, setUser] = useState([])
    const [products, setProducts] = useState([])
    const [sign, setSign] = useState([])
    const [filterresult, setFilterresult] = useState([]);
    const [busqueda, setBusqueda] = useState("");
    const [productsFavoritos, setProductsFavoritos] = useState([])
  
    
    const fetchData = async () => {
        const response = await fetch("../db/usuarios.json");
        let u = await response.json()?? [];
        setUser(u)

        const r2 = await fetch("../db/productos.json");
        let pd = await r2.json()?? [];
        setProducts(pd)
    }

    useEffect(() => {
        fetchData();
    }, []);
    
    return(
        <Context.Provider value={{user, setUser, products, setProducts, sign, setSign, filterresult, setFilterresult, busqueda, setBusqueda, productsFavoritos, setProductsFavoritos}}>
            {children}
        </Context.Provider>
    )
}