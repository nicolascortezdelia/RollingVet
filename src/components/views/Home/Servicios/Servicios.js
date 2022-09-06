import React from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';

import { Link } from 'react-router-dom';

const Servicios = () => {
  return (
    <Container className="mb-3">
      <Row>
        <Col sm={12} md={3} className="d-flex justify-content-center mb-4 ">
          <Card style={{ width: '18rem', height: '25rem' }} className="shadow">
            <Card.Img
              variant="top"
              src="https://veterinarskastanicanis.rs/wp-content/uploads/2021/05/Vakcinacija-pasa-Carousel.jpg"
              alt="celular"
            />
            <Card.Body>
              <Card.Title>Vacunación</Card.Title>
              <Card.Text>
                Colocamos a tu mascota las vacunas que necesita durante todas
                las etapas
              </Card.Text>
              <Link className="text-secondary" to="*">
                Ver Más
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={3} className="d-flex justify-content-center mb-4">
          <Card style={{ width: '18rem', height: '25rem' }} className="shadow">
            <Card.Img
              variant="top"
              src="https://veterinarskastanicanis.rs/wp-content/uploads/2021/05/Interna-medicina-Carousel.jpg"
              alt="pastor aleman con una veterinaria"
            />
            <Card.Body>
              <Card.Title>Diagnóstico</Card.Title>
              <Card.Text>
                Equipados con la tecnología más sofisticada te garantizamos el
                mejor diagnóstico para tu mascota.
              </Card.Text>
              <Link className="text-secondary" to="*">
                Ver Más
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={3} className="d-flex justify-content-center mb-4">
          <Card style={{ width: '18rem', height: '25rem' }} className="shadow">
            <Card.Img
              variant="top"
              src="https://veterinarskastanicanis.rs/wp-content/uploads/2021/05/Dermatologija-Carousel.jpg"
              alt="perro con un veterinario"
            />
            <Card.Body>
              <Card.Title>Cirugía</Card.Title>
              <Card.Text>
                Contamos con los mejores especialistas en intervenciones
                quirúrgicas
              </Card.Text>
              <Link className="text-secondary" to="*">
                Ver Más
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={3} className="d-flex justify-content-center mb-4">
          <Card style={{ width: '18rem', height: '25rem' }} className="shadow">
            <Card.Img
              variant="top"
              src="https://veterinarskastanicanis.rs/wp-content/uploads/2021/05/Vakcinacija-macaka-Carousel.jpg"
              alt="gatito acostado tapado"
            />
            <Card.Body>
              <Card.Title>Tratamiento Primeros Días</Card.Title>
              <Card.Text>
                Nuestros especialistas cuidan la salud de tu mascota desde sus
                primeros días
              </Card.Text>
              <Link className="text-secondary" to="*">
                Ver Más
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Servicios;
