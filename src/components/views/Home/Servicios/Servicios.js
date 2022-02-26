import React from "react";
import {
  Col,
  Container,
  Row,
  Card,
  
} from "react-bootstrap";

import { Link } from "react-router-dom";

const Servicios = () => {
  return (
    <Container className="mb-3">
      <Row>
        <Col sm={12} md={3} className="d-flex justify-content-center mb-4 ">
          <Card style={{ width: "18rem", height: "25rem" }} className="shadow">
            <Card.Img
              variant="top"
              src="https://vsn.shindiristudio.com/wp-content/uploads/2020/01/Emergency-Vet.jpg"
              alt="celular"
            />
            <Card.Body>
              <Card.Title>Emergencias</Card.Title>
              <Card.Text>
                Llamanos las 24 hs y te agendamos un examen urgente o respondemos tu consulta de emergencia 
              </Card.Text>
              <Link className="text-secondary" to="*">Ver Más</Link>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={3} className="d-flex justify-content-center mb-4">
          <Card style={{ width: "18rem", height: "25rem" }} className="shadow">
            <Card.Img
              variant="top"
              src="https://vsn.shindiristudio.com/wp-content/uploads/2020/01/About-Us.jpg"
              alt="pastor aleman con una veterinaria"
            />
            <Card.Body>
              <Card.Title>Diagnóstico</Card.Title>
              <Card.Text>
                Equipados con la tecnología más sofisticada te garantizamos el
                mejor diagnóstico para tu mascota.
              </Card.Text>
              <Link className="text-secondary" to="*">Ver Más</Link>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={3} className="d-flex justify-content-center mb-4">
          <Card style={{ width: "18rem", height: "25rem" }} className="shadow">
            <Card.Img
              variant="top"
              src="https://vsn.shindiristudio.com/wp-content/uploads/2020/01/Diagnostics-Surgery.jpg"
              alt="perro con un veterinario"
            />
            <Card.Body>
              <Card.Title>Cirugía</Card.Title>
              <Card.Text>
                Contamos con los mejores especialistas en intervenciones quirúrgicas de múltiples
                especialidades.
              </Card.Text>
              <Link className="text-secondary" to="*">Ver Más</Link>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={3} className="d-flex justify-content-center mb-4">
          <Card style={{ width: "18rem", height: "25rem" }} className="shadow">
            <Card.Img
              variant="top"
              src="https://vsn.shindiristudio.com/wp-content/uploads/2018/07/03-Lecenje.jpg"
              alt="gatito acostado tapado"
            />
            <Card.Body>
              <Card.Title>Tratamiento Ambulatorio</Card.Title>
              <Card.Text>
                Podés dejar a tus mascotas en nuestra clínica para que sean
                cuidadas por unas horas
              </Card.Text>
              <Link className="text-secondary" to="*">Ver Más</Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Servicios;
