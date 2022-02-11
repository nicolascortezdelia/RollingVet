import React from 'react';
import HomeCarousel from "./HomeCarousel/HomeCarousel";
import Planes from "./Planes/Planes";
import Staff from './Staff/Staff';

const Home = () => {
    return (
        <div>
        <HomeCarousel />
      <p className="lead display-1 text-center mb-3 mt-2">"Cuidando a tus mascotas desde hace 70 años"</p>
      <h1 className="text-center mb-3">Planes</h1>
      <Planes />
      <h1 className="text-center mb-3 mt-3">Nuestros profesionales</h1>
      <Staff /> 
        </div>
    );
};

export default Home;