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
} from "../../helpers/Validations";
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
        title: "Ay!",
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
        icon: "succes",
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
              src="https://vsn.shindiristudio.com/wp-content/uploads/2020/01/cat-2.jpg"
              alt='gatito siendo abrazod del Plan Primeros Pasos'
            />
              <h5 className="text-danger">Plan Primeros Pasos</h5>
              <Card.Text>
                Servicios para mascotas de 0 a 5 años.
              </Card.Text>
              
            </Card.Body>
          
        </Col>
        <Col sm={12} md={6} className="mt-3 container"> 
        <h3 className="text-danger">Envianos tu consulta</h3>
        
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
                    className="form-control"
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
                    className="form-control"
                    type="text"
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
