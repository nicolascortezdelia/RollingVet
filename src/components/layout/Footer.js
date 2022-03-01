import React from "react";
import { Row, Col} from "react-bootstrap";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className=" container-fluid bg-dark text-light text-center pt-3 pb-4">
        
          
          <Row>
            <Col sm={12} md={4} className="p-2">
              <Link to="/">
              
            <img
                src="Rollingvet.png"
                width="100"
                className="logo img-responsive"
                alt="logo de rolling vet"
              />
              </Link>
            </Col>

            <Col sm={12} md={4} className="p-3 ">

            <h5 className="lead">Seguinos en Nuestras redes:</h5>
            <Link to ="*" className="text-decoration-none text-white"> <i className="fab fa-2x  p-1 fa-instagram"></i> </Link>  
            <Link to ="*" className="text-decoration-none text-white"> <i className="fab fa-2x  p-1 fa-facebook-square"></i> </Link>  
            <Link to ="*" className="text-decoration-none text-white"> <i className="fab fa-2x  p-1 fa-twitter-square"></i></Link>  
              
              
              
            </Col>

            <Col sm={12} md={4} className="p-3">
              <p>
                Encontranos en : Gral. Paz 576, T4000 San Miguel de Tucumán,
                Tucumán
              </p>
              <p>Teléfono: 0381 578-3X3X</p>
            </Col>
            <p className="my-2"><b>&copy; Todos los derechos reservados</b></p>
          </Row>
          
        
      </div>
    </>
  );
};

export default Footer;


