import React from "react";
import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

const PaginaPlanes = () => {
  return (
    <div className="mb-5">
      <Fade bottom>
        <div>
          <img
            className="d-block w-100"
            src="https://www.catcare4life.org/app/uploads/2019/11/CC4L-banner-2.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5 className="display-5 fst-italic text-dark">
              Cuidá mejor a tu mascota con nuestros planes
            </h5>
            <hr />
          </Carousel.Caption>
        </div>
        <Container>
          <Card className="text-center shadow my-4">
            <Row>
              <Col sm={12} md={5}>
                <Card.Img
                  variant="top"
                  src="https://vsn.shindiristudio.com/wp-content/uploads/2020/01/cat-2.jpg"
                />
              </Col>
              <Col sm={12} md={7}>
                <Card.Body>
                  <h3 className="text-danger display-5">Plan Primeros Pasos</h3>
                  <Card.Text>
                    Servicios para mascotas de 0 a 5 años.
                  </Card.Text>
                  <Link to ="*">  <Button variant="danger" className="color-navbar rounded-pill"> 
                    Contratar
                  </Button>
                  </Link>
                </Card.Body>
              </Col>
            </Row>
          </Card>

          <Card className="text-center shadow my-4">
            <Row>
              <Col sm={12} md={7} xs={{ order: 'last' }}  xl={{ order: "first" }} >
                <Card.Body>
                  <h3 className="text-danger display-5">Plan Madurando</h3>
                  <Card.Text>
                    Servicios para mascotas de 5 a 10 años.
                  </Card.Text>
                  <Link to ="*"> 
                  <Button variant="danger" className="color-navbar rounded-pill">
                    Contratar
                  </Button>
                  </Link>
                </Card.Body>
              </Col>
              <Col sm={12} md={5} xs={{ order: "first" }} xl={{ order: "last" }}>
                <Card.Img
                  variant="top"
                  src="https://vsn.shindiristudio.com/wp-content/uploads/2019/01/Savet-Pas-1.jpg"
                />
              </Col>
            </Row>
          </Card>
          <Card className="text-center shadow my-4">
            <Row>
              <Col sm={12} md={5}>
                <Card.Img
                  variant="top"
                  src="https://vsn.shindiristudio.com/wp-content/uploads/2019/01/Savet-Pas-4.jpg"
                />
              </Col>
              <Col sm={12} md={7}>
                <Card.Body>
                  <h3 className="text-danger display-5">Plan Primeros Pasos</h3>
                  <Card.Text>
                    Servicios para mascotas de más de 10 años.
                  </Card.Text>
                  <Link to ="*"> 
                  <Button variant="danger" className="color-navbar rounded-pill">
                    Contratar
                  </Button>
                  </Link>
                </Card.Body>
              </Col>
            </Row>
          </Card>

          

         
        </Container>
      </Fade>
    </div>
  );
};

export default PaginaPlanes;
