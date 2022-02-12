import React from "react";
import { Form } from "react-bootstrap";

const ContactUs = () => {
  return (
    <>
      <div>
        <Form className="my-5 container">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="fw-bold">Nombre y Apellido</Form.Label>
            <Form.Control type="text" placeholder="Nombre y Apellido" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="fw-bold">Correo Electronico</Form.Label>
            <Form.Control
              type="email"
              placeholder="email@ejemplo.com"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="fw-bold">Dejanos tu Consulta</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <button className="btn btn-primary" type="submit">
            Enviar
          </button>
        </Form>
        <div>
            <iframe src="" frameborder="0"></iframe>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
