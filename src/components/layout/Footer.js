import React from "react";
import { Container, Row } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <article className="Container py-1 Grid bg-primary">
        <section className="Row">
          <div className="Col xs={12} md={4} my-5 text-center">
            <h4 className="fw-bold">Seguinos en Nuestras Redes</h4>
            <i className="fab fa-twitter-square fa-2x text-dark p-2"></i>
            <i className="fab fa-facebook-square fa-2x text-dark p-2"></i>
            <i className="fab fa-instagram-square fa-2x text-dark p-2"></i>
          </div>
          <div className="Col xs={12} md={4} my-3 text-center">
            <img
              src="Rollingvet.png"
              width="80"
              className="logo img-responsive"
              alt="logo de rolling vet"
            />
          </div>
          <div className="Col xs={12} md={4} my-3 text-center">
            <p>
              <b>&copy; Todos los derechos reservados</b>
            </p>
            <p className="fw-bolder text-center">
              Encontranos en : Gral. Paz 576, T4000 San Miguel de Tucumán,
              Tucumán
            </p>
            <p className="fw-bolder text-center">Teléfono: 0381 578-3X3X</p>
          </div>
        </section>
      </article>
    </>
  );
};

export default Footer;
