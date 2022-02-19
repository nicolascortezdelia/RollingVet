import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";

const Productos = () => {
  return (
    <Container>
      <Row>
        <Col sm={12} md={6} className="d-flex">
          <img src="https://cdn.royalcanin-weshare-online.io/wefNEnsBaPOZra8qk7jH/v3/ar-l-productos-perro-nutricion-especifica?w=640&" alt="" />
        </Col>
        <Col sm={12} md={6}>
            <h3 className="text-danger display-4 " >Buscá el alimento adecuado para tu perro </h3>
            <span>Cada fórmula se crea para
          brindar una nutrición que se adapte a las necesidades de salud de tu
          perro, independientemente de su tamaño, raza, edad o estilo de vida.</span>
          
        </Col>
      </Row>
    </Container>
  );
};

export default Productos;
