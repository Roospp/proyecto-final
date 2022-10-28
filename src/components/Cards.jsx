import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import FotoCard from '../assets/img/farcry.jpg'
import FotoCard2 from '../assets/img/bf1.jpg'

const Cards = () => {
    return (
        <div className='container-fluid d-flex'>
        <Card className='container-card row'>
       <Card.Img className='card-img' variant="top" src={FotoCard} />
        <Card.Body className='body-card'>
        <Card.Title>Farcry</Card.Title>
        <Card.Text>
          Precio: $ 30.000
        </Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
    <Card className='container-card'>
       <Card.Img className='card-img' variant="top" src={FotoCard2} />
        <Card.Body className='body-card'>
        <Card.Title>Battlefield 1</Card.Title>
        <Card.Text>
        Precio: $ 30.000
        </Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
    </div>
    )
}

export default Cards