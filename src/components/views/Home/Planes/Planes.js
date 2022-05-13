import React from 'react';
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const Planes = () => {
    return (
      
        <Container >
      <Row>
        <Col sm={12} md={4} className="mb-2">
          <Card className="text-center shadow">
            <Card.Body>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/57416/cat-sweet-kitty-animals-57416.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt='gatito tierno de Primeros pasos'
            />
              <Card.Title className='mt-2'>Plan Primeros Pasos</Card.Title>
              <Card.Text>
                Servicios para mascotas de 0 a 5 años.
              </Card.Text>
              <Link to="/planes/primerospasos"> <Button variant="danger" className="color-navbar rounded-pill">Contratar</Button></Link>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4} className="mb-2">
          <Card className="text-center shadow">
            <Card.Body>
            <Card.Img
              variant="top"
              src="https://vsn.shindiristudio.com/wp-content/uploads/2019/01/Savet-Pas-1.jpg"
              alt='perro mirando al frente del Plan Madurando'
            />
              <Card.Title className='mt-2'>Plan Madurando</Card.Title>
              <Card.Text>
                Servicios para mascotas de 5 a 10 años.
              </Card.Text>
              <Link to="/planes/madurando"> <Button variant="danger" className="color-navbar rounded-pill">Contratar</Button></Link>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4}>
          <Card className="text-center shadow">
            
            <Card.Body>
            <Card.Img
              variant="top"
              src="https://vsn.shindiristudio.com/wp-content/uploads/2019/01/Savet-Pas-4.jpg"
              alt='perro acostado del Plan Adultos  '
            />
              <Card.Title className='mt-2'>Plan Adultos</Card.Title>
              <Card.Text>
                Servicios para mascotas de más de 10 años.
              </Card.Text>
              <Link to="/planes/adultos"> <Button variant="danger" className="color-navbar rounded-pill">Contratar</Button></Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    
    );
};

export default Planes;