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
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 fotos-carusel"
          src={foto2}
          alt="Second slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 fotos-carusel"
          src={foto3}
          alt="Third slide"
        />

       
      </Carousel.Item>
      </Carousel>
  

  

    
</div>
  
)}

export default UncontrolledExample;