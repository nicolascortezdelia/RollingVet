import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import "./login.css";

const Login = () => {
  const [arregloLogin, setArregloLogin] = useState([]);
  const [input, setImput] = useState("");

  const hundleSubmit = (e) => {
    e.preventDefault();
    // guardar inputs en arreglo
    setArregloLogin([...arregloLogin, input]);
  };

  return (
    <>
      <div className="container-fluid d-flex align-items-center" id="imagenFondoLogin">
       
       <Container style={{ width: '25rem', height: "23rem"}} className="border rounded border-white border-1  ">
         <div>
           <p className=" fs-2 text-light text-center fw-light">Inicie Sesión</p>
           <hr className="text-white"/>
           </div>
         <Form onSubmit={hundleSubmit} className="mx-5 text-light mt-3">
        <Form.Group className="mb-3 " controlId="formBasicEmail">
          <Form.Label>Dirección</Form.Label>
          <Form.Control
            type="email"
            placeholder="Inserte su e-mail"
            onChange={(e) => {
              setArregloLogin(e.target.value);
            }}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setImput(e.target.value);
            }}
          />
          <Button variant="primary" type="submit" className="mt-2">
            Ingresar
          </Button>
        </Form.Group>
      </Form>

       </Container>
      </div>
    </>
  );
};

export default Login;
