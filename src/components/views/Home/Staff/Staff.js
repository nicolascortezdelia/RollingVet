import React from 'react';
import { Col, Container, Row } from "react-bootstrap";

const Staff = () => {
    return (
        <Container className="mb-3">
      <Row>
        <Col sm={12} md={6} className="d-flex mb-4">
          <Col sm={12} md={4}>
            <img
              className="rounded img-profesionales"
              src="https://images.squarespace-cdn.com/content/v1/53aa5722e4b0ada1a70119f2/1529694594561-7ERUUT9270RZI2R946J1/CORP20180521-Freeman+%284+of+6%29-Edit.jpg?format=2500w"
              alt="foto"
            />
          </Col>
          <Col sm={12} md={8} className="align-items-center text-center ms-3">
            <p className="display-6">Paula Andrea</p>
            <p className="lead">15 años de experiencia</p>
          </Col>
        </Col>
        <Col sm={12} md={6} className="d-flex mb-4">
          <Col sm={12} md={4}>
            <img
              className="rounded img-profesionales"
              src="https://www.bethesdaheadshots.com/wp-content/uploads/2015/07/HAMZA_5496pF800x1000.jpg"
              alt="foto"
            />
          </Col>
          <Col sm={12} md={8} className="align-items-center text-center ms-3">
            <p className="display-6">Lionel Andrés</p>
            <p className="lead">20 años de experiencia</p>
          </Col>
        </Col>
      </Row>
    </Container>
    );
};

export default Staff;