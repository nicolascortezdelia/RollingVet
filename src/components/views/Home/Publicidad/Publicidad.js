import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import "./publicidad.css"

const Publicidad = () => {
  return (
    <Container fluid className="bg-light  mt-4">
      <Row>
      <Col sm={12} md={4}>
          <img
          className="img-size"
            src="https://cdn.royalcanin-weshare-online.io/1GnLpWYBG95Xk-RBFd3d/v1/puppy-labrador-kitten-british-shorthair-b-w-brand-emblematic"
            alt=""
          />
        </Col>

        <Col sm={12} md={4}>
          <img
          className="img-size"
            src="https://cdn.royalcanin-weshare-online.io/lSEua2QBaxEApS7L_vuK/v2/logo-rc-dms-2016-c"
            alt=""
          />
        </Col>
        <Col sm={12} md={4}>
          <img
          className="img-size"
            src="https://i.ytimg.com/vi/A4SN8mTgrd4/maxresdefault.jpg"
            alt=""
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Publicidad;
