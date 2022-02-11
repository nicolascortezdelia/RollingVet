import React from 'react';
import { Carousel } from "react-bootstrap";

const HomeCarousel = () => {
    return (
        <div>
            <Carousel className="mt-3 mb-3">
          <Carousel.Item>
            <img
              className="d-block w-100 img-carousel"
              src="https://www.bankrate.com/2021/06/11161827/The-average-veterinarian-salary_-How-much-do-vets-make_.jpg?auto=webp&optimize=high&crop=16:9"
              alt="cafe"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img-carousel"
              src="https://www.aaha.org/globalassets/05-pet-health-resources/ask-aaha/ask_aaha_vetvisits_teaser.jpg"
              alt="croissant"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img-carousel"
              src="https://www.petparadise.com/files/4859/veterinary-hospital-in-charlotte.JPG"
              alt="mixed roasts"
            />
          </Carousel.Item>
        </Carousel>
        </div>
    );
};

export default HomeCarousel;