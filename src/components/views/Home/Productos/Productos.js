import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import './productos.css';
import { Link } from 'react-router-dom';

const Productos = () => {
  return (
    <Container className="mb-4">
      <Row>
        <Col sm={12} md={6} className="d-flex">
          <div className="container">
            <img
              className="img-fluid"
              src="https://cdn.royalcanin-weshare-online.io/wefNEnsBaPOZra8qk7jH/v3/ar-l-productos-perro-nutricion-especifica?w=640&"
              alt="bolsa de comida para perro Royal Canin"
            />
          </div>
        </Col>
        <Col sm={12} md={6} className="p-3">
          <h3 className="text-danger display-5">
            Buscá el alimento adecuado para tu perro{' '}
          </h3>
          <span className="text-center">
            Cada fórmula se crea para brindar una nutrición que se adapte a las
            necesidades de salud de tu perro, independientemente de su tamaño,
            raza, edad o estilo de vida.
          </span>

          <div>
            <Link to="*">
              {' '}
              <Button
                variant="link"
                className="btn btn-white mt-2 text-danger border border-danger rounded-pill text-decoration-none"
              >
                {' '}
                Ver Todos los Productos
              </Button>{' '}
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Productos;
