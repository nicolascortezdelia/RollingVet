import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section className="bg-dark text-light text-center my-0 footer">
        <Container>
          
          <Row>
            <Col sm={12} md={4}>
              <Link to="/">
              
            <img
                src="Rollingvet.png"
                width="100"
                className="logo img-responsive"
                alt="logo de rolling vet"
              />
              </Link>
            </Col>

            <Col sm={12} md={4}>

            <h5 className="lead">Seguinos en Nuestras redes:</h5>
            <Link to ="*" className="text-decoration-none text-white"> <i className="fab fa-2x  p-1 fa-instagram"></i> </Link>  
            <Link to ="*" className="text-decoration-none text-white"> <i className="fab fa-2x  p-1 fa-facebook-square"></i> </Link>  
            <Link to ="*" className="text-decoration-none text-white"> <i className="fab fa-2x  p-1 fa-twitter-square"></i></Link>  
              
              
              
            </Col>

            <Col sm={12} md={4}>
              <p>
                Encontranos en : Gral. Paz 576, T4000 San Miguel de Tucumán,
                Tucumán
              </p>
              <p>Teléfono: 0381 578-3X3X</p>
            </Col>
          </Row>
          <p className="my-5"><b>&copy; Todos los derechos reservados</b></p>
        </Container>
      </section>
    </>
  );
};

export default Footer;


