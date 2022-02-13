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
        
        {/* <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.1023707775184!2d-65.20939048529601!3d-26.83669609650096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d3ad7f30f1d%3A0xf8606cd659b8e3e4!2sRollingCode%20School!5e0!3m2!1ses!2sar!4v1644714185703!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div> */}
      </div>
      
    </>
  );
};

export default ContactUs;
