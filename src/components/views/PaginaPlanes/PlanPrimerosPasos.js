import React, { useRef } from "react";
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import Swal from "sweetalert2";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { init } from "@emailjs/browser";
import {
  validateEmail,
  validateNames,
  validateMesage,
} from "../../Helpers/validacionesPacientes";
init("user_qzhExCW0FgIpI81KTZIIe");

const PlanPrimerosPasos = () => {
  // States

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mesage, setMesage] = useState("");

  // EmailJs
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    // validamos datos
    if (!validateNames(name) || !validateEmail(email) || !validateMesage(mesage)) {
      Swal.fire({
        icon: "error",
        title: "Ops!",
        text: "Ingresaste algun dato incorrecto, por favor revisá el formulario",
      });
    } else {
      // Email js
      emailjs.sendForm("service_dihrpp7", "template_qe3arwq", form.current)
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      setName("");
      setEmail("");
      setMesage("");

      Swal.fire({
        icon: "success",
        title: "Listo!",
        text: "Gracias por tu consulta, pronto nos pondremos en contacto con vos",
      });
    }
  };

  return (
    <div>
      <Container>
        <Card className="text-center shadow m-4 ">
        <Row>
        <Col sm={12} md={6} className="mb-2">
          
            <Card.Body>
            <Card.Img
              variant="top"
              src="https://media.istockphoto.com/photos/cute-cat-sleeping-and-relaxed-snuggling-on-the-bed-animal-friendly-picture-id1219352486?k=20&m=1219352486&s=612x612&w=0&h=l1C4u64mkhkC2wUfSvS1QitJqhwug2S8ACfJKaL1o-Y="
              alt='gatito tierno de Primeros pasos'
            />
              <h5 className="text-danger">Plan Primeros Pasos</h5>
              <Card.Text>
                Servicios para mascotas de 0 a 5 años.
              </Card.Text>
              
            </Card.Body>
          
        </Col>
        <Col sm={12} md={6} className="mt-3 container"> 
        <h3 className="text-danger">Consultá por este Plan</h3>
        
        <Form className="my-4 container text-start " onSubmit={handleSubmit} ref={form} >
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="fw-bold text-dark">
                    Nombre y Apellido
                  </Form.Label>
                  <input
                    value={name}
                    name="user_name"
                    className="form-control rounded-pill"
                    type="text"
                    placeholder="Ej: Andrea Pérez"
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="fw-bold text-dark">
                    Correo Electronico
                  </Form.Label>
                  <input
                    value={email}
                    className="form-control rounded-pill"
                    type="email"
                    placeholder="ejemplo@gmail.com"
                    name="user_email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Form.Text className="text-muted">
                    No compartiremos tu e-mail o tus datos con nadie más
                  </Form.Text>
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control
                    value={mesage}
                    className="rounded"
                    as="textarea"
                    rows={3}
                    placeholder="Ingrese su consulta"
                    onChange={(e) => setMesage(e.target.value)}
                  />
                </Form.Group>
                <button className="btn btn-danger rounded-pill" type="submit">
                  Enviar
                </button>
              </Form>
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
};

export default PlanPrimerosPasos;
