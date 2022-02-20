import React from 'react';
import { Carousel } from "react-bootstrap";

const HomeCarousel = () => {
    return (
      
     <div>
        <img
          className="d-block w-100"
          src="https://www.fundacion-affinity.org/sites/default/files/slide-abandono_1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='display-3 '>RollingVet</h3>
          <p className='fst-italic'>Tu mascota, en buenas manos</p>
        </Carousel.Caption>
        </div>
      
    
    );
};

export default HomeCarousel;