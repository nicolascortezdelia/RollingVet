import React, { useState } from "react";
import { Form, Button, Container,} from "react-bootstrap";
import Fade from "react-reveal/Fade";
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
    <Fade bottom>
      <div className="container d-flex align-items-center my-3" >
       
       <Container style={{ width: '25rem', height: "23rem"}} className="border rounded border-dark border-1">
         <div>
           <p className=" fs-2 text-danger text-center fw-light mt-2">Inicie Sesión</p>
           <hr className="text-dark"/>
           </div>
         <Form onSubmit={hundleSubmit} className="mx-5 text-light mt-3">
        <Form.Group className="mb-3 " controlId="formBasicEmail">
          <Form.Label className="text-dark">Dirección</Form.Label>
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
          <Form.Label className="text-dark">Clave</Form.Label>
          <Form.Control
            type="password"
            placeholder="Inserte su clave"
            onChange={(e) => {
              setImput(e.target.value);
            }}
          />
          <Button variant="danger" type="submit" className="mt-2 rounded-pill">
            Ingresar
          </Button>
        </Form.Group>
      </Form>

       </Container>
      </div>
      </Fade>
    </>
  );
};

export default Login;
