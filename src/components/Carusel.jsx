import Carousel from 'react-bootstrap/Carousel';
import foto1 from '../assets/img/carusel1.jpg'
import foto2 from '../assets/img/carusel2.jpg'
import foto3 from '../assets/img/carusel3.jpg'


function UncontrolledExample() {


  return (
    <div>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 fotos-carusel"
          src={foto1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Lorem ipsum </h3>
          <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 fotos-carusel"
          src={foto2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Lorem ipsum</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 fotos-carusel"
          src={foto3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Lorem ipsum</h3>
          <p>
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
  

  

    
</div>
  
)}

export default UncontrolledExample;