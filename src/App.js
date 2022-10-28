import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Context from "./Context";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import Tienda from "./views/Tienda";
import DetalleProducto from "./views/DetalleProducto";
import Perfil from "./views/Perfil";
import Favoritos from "./views/Favoritos";
import Publicaciones from "./views/Publicaciones";
import Registrarse from "./components/Registrarse"



function App() {
  return (
    <div className="App">
     <Context.Provider value={{}}>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/tienda" element={<Tienda/>} />
          <Route path="/Registrarse" element={<Registrarse/>} />
          <Route path="/detalleProducto" element={<DetalleProducto/>} />
          <Route path="/perfil" element={<Perfil/>} />
          <Route path="/favoritos" element={<Favoritos/>} />
          <Route path="/publicaciones" element={<Publicaciones/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;
