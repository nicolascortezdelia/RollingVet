import React from 'react';

import { Container, Row, Col, Card} from 'react-bootstrap';
import Cristian from "../images/Cristian.jpeg";
import Nicolas from "../images/Nicolas.jpeg";
import Juan from "../images/Juan.jpeg";
import Luciano from "../images/Luciano.jpg";

const Nosotros = () => {
    return (
        <div>
            <Container>
            <h1 className=" display-4  text-danger  text-center"> Sobre Nosotros</h1>
            <hr />
            
            <h5 className='text-center p-4 fst-italic'>"Si pasas tiempo con los animales, corres el riesgo de volverte una mejor persona"</h5>
            </Container>
           <br />
          <Container className='container-fluid mb-5'>
              <Row  className="justify-content-around">
                  <Col sm={6} md={3} className="my-2">
                  <div className="text-center">
            {" "}
            <img src={Cristian} alt="foto de Cristian " className="rounded-circle w-75" />{" "}
          </div>
          <Card.Title className="text-center text-danger  mt-1">Cristian Brandino </Card.Title>
                  </Col>
                  <Col sm={6} md={3} className="my-2">
                  <div className="text-center">
            {" "}
            <img src={Nicolas} alt="foto de Nico" className="rounded-circle w-75" />{" "}
          </div>
            <Card.Title className="text-center text-danger  mt-1">Nicolás Cortez D'Elia </Card.Title>
                  </Col>
                  <Col sm={6} md={3} className="my-2">
                  <div className="text-center">
            {" "}
            <img src={Juan} alt="foto de Juan Pablo " className="rounded-circle w-75" />{" "}
          </div>
          <Card.Title className="text-center text-danger  mt-1">Juan Pablo Torres </Card.Title>
                  </Col>
                  <Col sm={6} md={3} className="my-2">
                  <div className="text-center">
            {" "}
            <img src={Luciano} alt="foto de Luciano" className="rounded-circle w-75" />{" "}
          </div>
          <Card.Title className="text-center text-danger  mt-1">Luciano Hidalgo</Card.Title>
                  </Col>
              </Row>
           </Container>     
            </div>
        
    );
};

export default Nosotros;