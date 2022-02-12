import React from "react";
import {
  Col,
  Container,
  Row,
  Card,
  ListGroup,
  ListGroupItem,
  Image,
} from "react-bootstrap";
import "./clientes.css"
import Romina from "../img/Romina.png"

import Bautista from "../img/Bautista.png"
import Lorena from "../img/Lorena.png"

const Clientes = () => {
  return (
    <Container >
      <Row className="justify-content-around">
        <Col sm={12} md={4} >
        
            <div className="text-center" > <img src={Romina} alt="" className="img-redonda" /> </div>
            
              
              
           
            
              <Card.Body>
              <Card.Text className="text-center fst-italic">
                "La mejor atención y los mejores profesionales toda la ciudad.
                100% recomendado"
              </Card.Text>
              <Card.Title className="text-center text-danger fw-bold">
                Romina González
              </Card.Title>
              <p className="text-center fw-lighter">Dueña de Dylan</p>
            </Card.Body>
         
        </Col>
        <Col sm={12} md={4}>
        
            <div className="text-center" > <img src={Bautista} alt="" className="img-redonda" /> </div>

            
              <Card.Body>
              <Card.Text className="text-center fst-italic">
                "Amo como tratan tanto a las mascotas como a las personas"
              </Card.Text>
              <Card.Title className="text-center text-danger fw-bold">
                Damián Petrelli
              </Card.Title>
              <p className="text-center fw-lighter">Dueño de Bobby</p>
            </Card.Body>
          
        </Col>
        <Col sm={12} md={4}>
          
            <div className="text-center" > <img src={Lorena} alt="" className="img-redonda" /> </div>
            
              
              
           
            
              <Card.Body>
              <Card.Text className="text-center fst-italic">
                "Tengo muchos gatitos que amo y los llevo siempre al mejor lugar, RollingVet"
              </Card.Text>
              <Card.Title className="text-center text-danger fw-bold">
              Lorena Nelegatti
              </Card.Title>
              <p className="text-center fw-lighter">Dueña de Michifuz</p>
            </Card.Body>
          
        </Col>
      </Row>
    </Container>
  );
};

export default Clientes;
