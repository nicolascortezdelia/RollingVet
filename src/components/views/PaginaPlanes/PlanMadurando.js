import React, { useRef } from 'react';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import Swal from 'sweetalert2';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { init } from '@emailjs/browser';
import {
  validateEmail,
  validateNames,
  validateMesage,
} from '../../Helpers/validacionesPacientes';
init('user_qzhExCW0FgIpI81KTZIIe');

const PlanMadurando = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mesage, setMesage] = useState('');

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !validateNames(name) ||
      !validateEmail(email) ||
      !validateMesage(mesage)
    ) {
      Swal.fire({
        icon: 'error',
        title: 'Ops!',
        text:
          'Ingresaste algun dato incorrecto, por favor revisá el formulario',
      });
    } else {
      emailjs
        .sendForm('service_dihrpp7', 'template_qe3arwq', form.current)
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      setName('');
      setEmail('');
      setMesage('');

      Swal.fire({
        icon: 'success',
        title: 'Listo!',
        text:
          'Gracias por tu consulta, pronto nos pondremos en contacto con vos',
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
                  src="https://media.istockphoto.com/photos/border-collie-dog-picture-id537392394?k=20&m=537392394&s=612x612&w=0&h=sKKL2aRbm7MOEltcQ5JrKsR2mq8MMZIsDGNSRKgvJRA="
                  alt="perro mirando al frente del Plan Madurando"
                />
                <h5 className="text-danger">Plan Madurando</h5>
                <Card.Text>Servicios para mascotas de 5 a 10 años.</Card.Text>
              </Card.Body>
            </Col>
            <Col sm={12} md={6} className="mt-3 container">
              <h3 className="text-danger">Consultá por este Plan</h3>

              <Form
                className="my-4 container text-start "
                onSubmit={handleSubmit}
                ref={form}
              >
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

export default PlanMadurando;
