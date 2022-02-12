import React from 'react';
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Planes = () => {
    return (
        <Container>
      <Row>
        <Col sm={12} md={4}>
          <Card className="text-center shadow">
            <Card.Body>
              <Card.Title>Planes para Perros</Card.Title>
              <Card.Text>
                Servicios para mascotas de 0 a 5 años.
              </Card.Text>
              <Button variant="light" className="color-navbar">Contratar</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4}>
          <Card className="text-center shadow">
            <Card.Body>
              <Card.Title>Planes para Gatos</Card.Title>
              <Card.Text>
                Servicios para mascotas de 5 a 10 años.
              </Card.Text>
              <Button variant="light" className="color-navbar">Contratar</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4}>
          <Card className="text-center shadow">
            <Card.Body>
              <Card.Title>Planes para Caballos</Card.Title>
              <Card.Text>
                Servicios para mascotas de más de 10 años.
              </Card.Text>
              <Button variant="light" className="color-navbar">Contratar</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    );
};

export default Planes;