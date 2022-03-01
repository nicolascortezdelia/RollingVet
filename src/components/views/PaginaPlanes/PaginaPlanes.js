import React from "react";
import { Container, Row, Col, Card, Button} from "react-bootstrap";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

const PaginaPlanes = () => {
  return (
    <div className="mb-5">
      <Fade bottom>
        <Container >
          <Card className="border-white">
            <Row >
              <Col sm={12} md={7}  >
                <div className="mt-5">
                <h1 className=" display-2  text-danger fst-bold text-center  ">
                  Nuestros planes
                </h1>
                <Card.Text className="text-center p-4">
                  Cuidá la salud y la nutrición de tu mascota en todas las etapas de su vida.
                   Explorá nuestros planes y
                  la información que aparece a continuación y elegí el que mejor para tu mascota.
                </Card.Text>

                </div>
                
              </Col>
              <Col sm={12} md={5}>
                <div className="mb-1">
                  <img
                    src="https://cdn.royalcanin-weshare-online.io/AWkwa2QBG95Xk-RBH9Rc/v11/golden-retriever-adult-weight-management-emblematic?w=960&"
                    alt="perro en blanco y negro jugando con pelota roja"
                    className="img-fluid"
                  />
                </div>
              </Col>
            <hr />
            </Row>
            
          </Card>
         
        </Container>

        <Container>
          <Card className="text-center shadow my-4">
            <Row>
              <Col sm={12} md={5}>
                <Card.Img
                  variant="top"
                  src="https://vsn.shindiristudio.com/wp-content/uploads/2020/01/cat-2.jpg"
                  alt="gatito siendo abrazado"
                />
              </Col>
              <Col sm={12} md={7}>
                <Card.Body>
                  <h3 className="text-danger display-5">Plan Primeros Pasos</h3>
                  <Card.Text>Servicios para mascotas de 0 a 5 años.</Card.Text>
                  <Link to="/planes/primerospasos">
                    {" "}
                    <Button
                      variant="danger"
                      className="color-navbar rounded-pill"
                    >
                      Contratar
                    </Button>
                  </Link>
                </Card.Body>
              </Col>
            </Row>
          </Card>

          <Card className="text-center shadow my-4">
            <Row>
              <Col
                sm={12}
                md={7}
                xs={{ order: "last" }}
                xl={{ order: "first" }}
              >
                <Card.Body>
                  <h3 className="text-danger display-5">Plan Madurando</h3>
                  <Card.Text>Servicios para mascotas de 5 a 10 años.</Card.Text>
                  <Link to="/planes/madurando">
                    <Button
                      variant="danger"
                      className="color-navbar rounded-pill"
                    >
                      Contratar
                    </Button>
                  </Link>
                </Card.Body>
              </Col>
              <Col
                sm={12}
                md={5}
                xs={{ order: "first" }}
                xl={{ order: "last" }}
              >
                <Card.Img
                  variant="top"
                  src="https://vsn.shindiristudio.com/wp-content/uploads/2019/01/Savet-Pas-1.jpg"
                  alt="perro mirando al frente"
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
                  alt="perro acostado"
                />
              </Col>
              <Col sm={12} md={7}>
                <Card.Body>
                  <h3 className="text-danger display-5">Plan Adultos</h3>
                  <Card.Text>
                    Servicios para mascotas de más de 10 años.
                  </Card.Text>
                  <Link to="/planes/adultos">
                    <Button
                      variant="danger"
                      className="color-navbar rounded-pill"
                    >
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
