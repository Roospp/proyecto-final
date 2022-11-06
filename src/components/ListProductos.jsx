import React, { Component } from "react";
import ProductosDataService from "../services/productos.service";
import FavoritosDataService from "../services/favoritos.service";
import { getDatabase, onValue, set, ref, remove, push, get, child } from "firebase/database";
import { firebaseApp } from "../services/firebase";
import Card from 'react-bootstrap/Card';
import FotoCard from '../assets/img/farcry.jpg'
import Button from 'react-bootstrap/Button';
const db = getDatabase(firebaseApp);
let array = [];

var handleFavoritoClick = (producto, email) => {
    let data = {
      producto: 'Sonic',
      email: 'erikxp@gmail.com',
    };
    FavoritosDataService.create(data);
  }; 

  var handleDeleteFavoritoClick = () => {
    FavoritosDataService.delete('-NGDIGFTnCnTnYxo460o');
  };

  var handleCheckClick = () => {
    let data = {
        producto: 'Sonic',
        email: 'erikxp@gmail.com',
      };
    FavoritosDataService.exist(data);
  };

export default class ListProductos extends Component {
    constructor(props){
        super(props);

        this.state = {
            productos:[],
        }
    }
    
    componentDidMount(){
        
        onValue(ref(db, 'productos/'), (snapshot) => {  
            array = []
             snapshot.forEach(function(childSnapshot) {
                var key = childSnapshot.key;
                var data = childSnapshot.val();
              
                array.push({
                    key: key,
                    desc: data.desc,
                    nombre: data.nombre,
                    precio: data.precio,
                    vendedor: data.vendedor,
                  });
              }
             
              ); 
              this.setState({
                productos: array,
              });
              
             
          });
    }
    

      render() {
        const { productos } = this.state;
        return (<div className='container card-group d-flex  row-cols-4'>
        {productos.map((producto, index) => (
             <div key={index}>
                <Card className='container-card col ' >
                <Card.Img className='foto-card ' variant="top" src={FotoCard} />
                <Card.Body className='body-card'>
                <Card.Title>{producto.nombre}</Card.Title>
                <Card.Text>
                Precio: $ {producto.precio}
                </Card.Text>
                <Button variant="primary">Comprar</Button>
                <br/>
                <Button variant="primary" onClick={handleFavoritoClick('Call of duttty','erikxp@gmail.com')}>Agregar Favorito</Button>
                <br/>
                <Button variant="primary" onClick={handleDeleteFavoritoClick}>Eliminar Favorito</Button>
                <br/>
                <Button variant="primary" onClick={handleCheckClick}>Check</Button>
                </Card.Body>
                </Card>
            </div>
          ))}
      </div>);
      }
}