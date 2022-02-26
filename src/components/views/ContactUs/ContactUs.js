import React from "react";
import { Col, Container, Form, Row, Card } from "react-bootstrap";
import Iframe from "react-iframe";
import Fade from "react-reveal/Fade";
import "./ContactUs.css"
import Swal from "sweetalert2";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { init } from "@emailjs/browser";
import {
  validateEmail,
  validateNames,
  validateMesage,
} from "../../helpers/Validations";
init("user_qzhExCW0FgIpI81KTZIIe");

const ContactUs = () => {

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
    <>
    <Fade bottom>
    <div className="container-fluid p-1" >
      <div className="p-2 text-center">
      <h3 className="text-danger display-5 ">Contactanos</h3>
      <hr className="text-dark" />

    </div>

        <Container  >
         
          <Card className="mb-3">
          <Row>
            <Col sm={12} md={6} className="border-end border-danger" >
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
                                    <Form.Label className="fw-bold text-dark">
                    Dejanos tu Consulta
                  </Form.Label>
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

            <Col sm={12} md={6}>
              <Iframe className="my-4 container"

                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.1023707775184!2d-65.20939048529601!3d-26.83669609650096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d3ad7f30f1d%3A0xf8606cd659b8e3e4!2sRollingCode%20School!5e0!3m2!1ses!2sar!4v1644714185703!5m2!1ses!2sar"
                width="600"
                height="450"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
              ></Iframe>
            </Col>
          </Row>
          </Card>
        </Container>
        </div>
        </Fade>
    </>
  );
};

export default ContactUs;
