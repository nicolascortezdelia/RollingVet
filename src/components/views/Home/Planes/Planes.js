import React from 'react';
import { Container, Row, Col, Card, Button } from "react-bootstrap";


const Planes = () => {
    return (
      
        <Container>
      <Row>
        <Col sm={12} md={4}>
          <Card className="text-center shadow">
            <Card.Body>
            <Card.Img
              variant="top"
              src="https://vsn.shindiristudio.com/wp-content/uploads/2020/01/cat-2.jpg"
            />
              <Card.Title className='mt-2'>Plan Primeros Pasos</Card.Title>
              <Card.Text>
                Servicios para mascotas de 0 a 5 años.
              </Card.Text>
              <Button variant="danger" className="color-navbar">Contratar</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4}>
          <Card className="text-center shadow">
            <Card.Body>
            <Card.Img
              variant="top"
              src="https://vsn.shindiristudio.com/wp-content/uploads/2019/01/Savet-Pas-1.jpg"
            />
              <Card.Title className='mt-2'>Plan Madurando</Card.Title>
              <Card.Text>
                Servicios para mascotas de 5 a 10 años.
              </Card.Text>
              <Button variant="danger" className="color-navbar">Contratar</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4}>
          <Card className="text-center shadow">
            
            <Card.Body>
            <Card.Img
              variant="top"
              src="https://vsn.shindiristudio.com/wp-content/uploads/2019/01/Savet-Pas-4.jpg"
            />
              <Card.Title className='mt-2'>Plan Adultos</Card.Title>
              <Card.Text>
                Servicios para mascotas de más de 10 años.
              </Card.Text>
              <Button variant="danger" className="color-navbar">Contratar</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    
    );
};

export default Planes;