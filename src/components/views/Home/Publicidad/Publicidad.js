import React from "react";
import { Col, Container, Row} from "react-bootstrap";
import "./publicidad.css"

const Publicidad = () => {
  return (
    <Container fluid className="bg-light  mt-4">
      <Row >
    
        <Col sm={12} md={6} className="d-flex justify-content-center ">
          <img
          className="img-size "
            src="https://cdn.royalcanin-weshare-online.io/lSEua2QBaxEApS7L_vuK/v2/logo-rc-dms-2016-c"
            alt="publicidad de royalcanin"
          />
        </Col>
        <Col sm={12} md={6} className="d-flex justify-content-center ">
          <img
          className="img-size"
            src="https://i.ytimg.com/vi/A4SN8mTgrd4/maxresdefault.jpg"
            alt="publicidad de 50 años"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Publicidad;
