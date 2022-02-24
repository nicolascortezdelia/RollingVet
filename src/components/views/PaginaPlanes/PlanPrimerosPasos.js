import React from 'react';
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const PlanPrimerosPasos = () => {
    return (
        <div>
             <Container >
      
        
        <Card className="text-center shadow m-4 ">
        <Row>
        <Col sm={12} md={6} className="mb-2">
          
            <Card.Body>
            <Card.Img
              variant="top"
              src="https://vsn.shindiristudio.com/wp-content/uploads/2020/01/cat-2.jpg"
            />
              <h5 className="text-danger">Plan Primeros Pasos</h5>
              <Card.Text>
                Servicios para mascotas de 0 a 5 años.
              </Card.Text>
              
            </Card.Body>
          
        </Col>
        <Col sm={12} md={6} className="mt-3 container"> 
        <h3 className="text-danger">Envianos tu consulta</h3>
        
        <Form className="my-4 container text-start ">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="fw-bold text-dark">Nombre y Apellido</Form.Label>
                  <Form.Control type="text" placeholder="ej: Andrea Pérez" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="fw-bold text-dark">
                    Correo Electronico
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="ejemplo@gmail.com"
                    required
                  />
                   <Form.Text className="text-muted">
      No compartiremos tu e-mail o tus datos con nadie más
    </Form.Text>
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <button className="btn btn-danger rounded-pill" type="submit">
                  Enviar
                </button>
              </Form>
        </Col>
        </Row>
        </Card>
        
    </Container>
            
        </div>
    );
};

export default PlanPrimerosPasos;