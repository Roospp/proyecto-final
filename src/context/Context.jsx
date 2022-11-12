import React, {useState, useEffect} from "react";

export const Context = React.createContext({})

export default function ContextProvider({children}){
    const [user, setUser] = useState([])
    const [products, setProducts] = useState([])
    const [sign, setSign] = useState([])
    
    const fetchData = async () => {
        const response = await fetch("../db/usuarios.json");
        let u = await response.json();
        setUser(u)
      }

    useEffect(() => {
        fetchData();
    }, []);
    
    return(
        <Context.Provider value={{user, setUser, products, setProducts, sign, setSign}}>
            {children}
        </Context.Provider>
    )
}