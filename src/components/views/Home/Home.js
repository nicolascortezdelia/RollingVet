import React from 'react';
import HomeCarousel from "./HomeCarousel/HomeCarousel";
import Planes from "./Planes/Planes";
import Staff from './Staff/Staff';
import Servicios from './Servicios/Servicios';
import Clientes from './Clientes/Clientes';
import Publicidad from './Publicidad/Publicidad';
import Productos from './Productos/Productos';
import Fade from "react-reveal/Fade";
import { Container } from "react-bootstrap";

const Home = () => {
    return (
        <div>
          <Fade bottom>
        <HomeCarousel />
      <h1 className="lead display-1 text-center mb-3 mt-2">Rolling Vet</h1>
      
      <Container>
      <h1 className="text-center my-3">Nuestros Servicios</h1>
      <hr />
      </Container>
      <Servicios></Servicios>
      <Container>
      <h1 className="text-center my-3">Planes</h1>
      <hr />

      </Container>
      
      <Planes />
      <Publicidad ></Publicidad>
      {/*aquí va la publicidad*/}
      <Container>
      <h1 className="text-center mb-4 mt-5">Nuestros profesionales</h1>
      <hr />
      <h3 className="text-center fw-lighter mb-3">Conocé a nuestros 
expertos </h3>

      </Container>
      
      <Staff /> 
      <Productos></Productos>

      <Container>
      <h1 className="text-center mb-3">Testimonios</h1>
      <hr />
      
      <h3 className="text-center fw-lighter mb-3">Clientes Felices</h3>
      </Container>
      
      <Clientes></Clientes>
      </Fade>

        </div>
    );
};

export default Home;