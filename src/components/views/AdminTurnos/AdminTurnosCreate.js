import React from "react";
import { Container, Form } from "react-bootstrap";

const AdminTurnosCreate = () => {
  return (
    <div>
      <Container className="my-5 container">
            <h1 className="text-center fw-bold ">Agendar Turnos</h1>
            <hr />
        <Form className ="my-3">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Nombre de la Mascota</Form.Label>
            <Form.Control type="text" placeholder="Nombre de la Mascota" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Nombre Del Profesional</Form.Label>
            <Form.Control type="text" placeholder="Nombre del Profesional" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Detalle De la Cita</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Fecha</Form.Label>
            <Form.Control type="number" placeholder="Escriba la fecha" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Horario</Form.Label>
            <Form.Control type="number" placeholder="Escriba el horario" />
          </Form.Group>
          <button className="btn btn-success">Guardar</button>

        </Form>
      </Container>
    </div>
  );
};

export default AdminTurnosCreate;
