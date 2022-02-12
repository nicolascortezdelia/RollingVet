import React from 'react';
import HomeCarousel from "./HomeCarousel/HomeCarousel";
import Planes from "./Planes/Planes";
import Staff from './Staff/Staff';
import Servicios from './Servicios/Servicios';
import Clientes from './Clientes/Clientes';

const Home = () => {
    return (
        <div>
        <HomeCarousel />
      <p className="lead display-1 text-center mb-3 mt-2">"Cuidando a tus mascotas desde hace 70 años"</p>
      <Servicios></Servicios>
      <h1 className="text-center mb-3 mt-3">Nuestros profesionales</h1>
      <Staff /> 
      <h1 className="text-center mb-3">Planes</h1>
      <Planes />
      <h1 className="text-center mb-3">Testimonios</h1>
      <h3 className="text-center fw-lighter mb-3">Lo que dicen nuestros clientes</h3>
      <Clientes></Clientes>

        </div>
    );
};

export default Home;