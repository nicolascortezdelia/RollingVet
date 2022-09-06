import React from 'react';
import { Carousel } from 'react-bootstrap';

const HomeCarousel = () => {
  return (
    <div className="carrouselcontainer">
      <img
        className="d-block w-100"
        src="https://www.fundacion-affinity.org/sites/default/files/slide-abandono_1.jpg"
        alt="First slide"
      />
      <Carousel.Caption className="pb-0 pb-md-4">
        <div className="titulo mb-0">
          <h3 className="display-3 mb-0 mb-md-2">RollingVet</h3>
          <p className="fst-italic mb-0 mb-md-3">Tu mascota, en buenas manos</p>
        </div>
      </Carousel.Caption>
    </div>
  );
};

export default HomeCarousel;
