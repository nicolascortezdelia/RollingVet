import React from 'react';
import "./Nosotros.css";
import { Container, Row, Col, Card} from 'react-bootstrap';
import Cristian from "../images/Cristian.jpeg";
import Nicolas from "../images/Nicolas.jpeg";
import Juan from "../images/Juan.jpeg";
import Luciano from "../images/Luciano.jpg";

const Nosotros = () => {
    return (
        <div>
            <Container>
            <h1 className=" display-5  text-danger fst-bold text-center"> Sobre Nosotros</h1>
            <br />
            <h4 className='text-danger text-center p-4 fst-italic'>
                "Somos lo que cuidamos". 
            </h4>
            <h5 className='text-center p-4 fst-italic'>siempre quisimos ser veterinarios pero nos reprobaron, al menos pudimos hacer esta página"</h5>
            </Container>
           <br />
          <Container>
              <Row  className="justify-content-around">
                  <Col sm={6} md={3}>
                  <div className="text-center">
            {" "}
            <img src={Cristian} alt="foto de Cristian " className="rounded-circle w-100" />{" "}
          </div>
            <h4 class="text-center colorIndex">Cristian Brandino</h4>
                  </Col>
                  <Col sm={6} md={3}>
                  <div className="text-center">
            {" "}
            <img src={Nicolas} alt="foto de Nico" className="rounded-circle w-100" />{" "}
          </div>
            <h4 class="text-center colorIndex">Nicolas Cortez D'Elia</h4>
                  </Col>
                  <Col sm={6} md={3}>
                  <div className="text-center">
            {" "}
            <img src={Juan} alt="foto de Juan Pablo " className="rounded-circle w-100" />{" "}
          </div>
            <h4 class="text-center ">Juan Pablo Torres</h4>
                  </Col>
                  <Col sm={6} md={3}>
                  <div className="text-center">
            {" "}
            <img src={Luciano} alt="foto de Luciano" className="rounded-circle w-100" />{" "}
          </div>
            <h4 class="text-center colorIndex">Luciano Hidalgo</h4>  
                  </Col>
              </Row>
           </Container>     
            </div>
        
    );
};

export default Nosotros;