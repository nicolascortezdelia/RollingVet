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
              alt='gatito siendo abrazod del Plan Primeros Pasos'
            />
              <h5 className="text-danger">Plan Primeros Pasos</h5>
              <Card.Text>
                Servicios para mascotas de 0 a 5 años.
              </Card.Text>
              
            </Card.Body>
          
        </Col>
        <Col sm={12} md={6} className="mt-3 container"> 
        <h3 className="text-danger display-5 p-2 ">Consultá por este plan</h3>
        <Form className='container pt-2 text-start'>
  <Form.Group className="mb-3 " controlId="formBasicEmail">
    <Form.Label >Ingresá tu e-mail</Form.Label>
    <Form.Control type="email" placeholder="Ej: juanperez@gmail.com" />
    <Form.Text className="text-muted">
      No compartiremos tu e-mail o tus datos con nadie más
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Clave</Form.Label>
    <Form.Control type="password" placeholder="Ingresá aquí tu clave" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    
  </Form.Group>
  <Button variant="danger" type="submit"  className="color-navbar rounded-pill">
    Enviar
  </Button>
</Form>
        </Col>
        </Row>
        </Card>
        
    </Container>
            
        </div>
    );
};

export default PlanPrimerosPasos;