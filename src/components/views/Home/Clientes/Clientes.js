import React from "react";
import {
  Col,
  Container,
  Row,
  Card,
  ListGroup,
  ListGroupItem,
  Image,
} from "react-bootstrap";

const Clientes = () => {
  return (
    <Container>
      <Row>
        <Col sm={12} md={4}>
          <Card border="light" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://images.squarespace-cdn.com/content/v1/53aa5722e4b0ada1a70119f2/1529694594561-7ERUUT9270RZI2R946J1/CORP20180521-Freeman+%284+of+6%29-Edit.jpg?format=2500w"
              className="rounded"
            />
            <Card.Body>
              <Card.Text className="text-center fst-italic">
                "La mejor atención y los mejores profesionales toda la ciudad.
                100% recomendado"
              </Card.Text>
              <Card.Title className="text-center text-danger fw-bold">
                Romina González
              </Card.Title>
              <p className="text-center fw-lighter">Dueña de Dylan</p>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4}>
          <Card border="light" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://images.squarespace-cdn.com/content/v1/53aa5722e4b0ada1a70119f2/1529694594561-7ERUUT9270RZI2R946J1/CORP20180521-Freeman+%284+of+6%29-Edit.jpg?format=2500w"
              className="rounded"
            />
            <Card.Body>
              <Card.Text className="text-center fst-italic">
                "La mejor atención y los mejores profesionales toda la ciudad.
                100% recomendado"
              </Card.Text>
              <Card.Title className="text-center text-danger fw-bold">
                Romina González
              </Card.Title>
              <p className="text-center fw-lighter">Dueña de Dylan</p>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4}>
          <Card border="light" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://images.squarespace-cdn.com/content/v1/53aa5722e4b0ada1a70119f2/1529694594561-7ERUUT9270RZI2R946J1/CORP20180521-Freeman+%284+of+6%29-Edit.jpg?format=2500w"
              className="rounded"
            />
            <Card.Body>
              <Card.Text className="text-center fst-italic">
                "La mejor atención y los mejores profesionales toda la ciudad.
                100% recomendado"
              </Card.Text>
              <Card.Title className="text-center text-danger fw-bold">
                Romina González
              </Card.Title>
              <p className="text-center fw-lighter">Dueña de Dylan</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Clientes;
