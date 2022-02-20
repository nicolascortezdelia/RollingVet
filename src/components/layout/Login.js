import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const Login = () => {
  const [arregloLogin, setArregloLogin] = useState([]);
  const [input, setImput] = useState("");

  const hundleSubmit = (e)=>{e.preventDefault()
// guardar inputs en arreglo
 setArregloLogin([...arregloLogin, input])

};
  
  return (

    <div className="container mb-3">
      
      <h1 className="display-2 text-center">Ingrese aquí</h1>
      <hr />
      <Form onSubmit = {hundleSubmit} className=" mx-5">
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
        <Button variant="danger" type="button">
          Salir
        </Button>
      </Form>
    </div>
  );
};

export default Login;
