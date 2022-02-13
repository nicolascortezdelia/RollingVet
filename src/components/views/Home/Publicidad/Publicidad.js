import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";

const Publicidad = () => {
  return (
    <Container fluid className="bg-light  mt-4">
      <Row>
        <Col sm={12} md={4}>
          <img
            className="img-responsive"
            src="https://www.themarkethink.com/wp-content/uploads/2018/06/sobres-pate.jpg"
            alt=""
          />
        </Col>

        <Col sm={12} md={4}>
          <img
            src="https://www.themarkethink.com/wp-content/uploads/2018/06/sobres-pate.jpg"
            alt=""
          />
        </Col>
        <Col sm={12} md={4}>
          <img
            src="https://www.themarkethink.com/wp-content/uploads/2018/06/sobres-pate.jpg"
            alt=""
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Publicidad;
