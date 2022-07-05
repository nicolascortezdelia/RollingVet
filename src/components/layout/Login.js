import React, { useState, useEffect } from "react";
import { Form, Button, Container,} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Fade from "react-reveal/Fade";
import {
  validateEmail,
  validatePassword,
} from "../Helpers/ValidacionesPacientes";
import Swal from "sweetalert2";
import bcrypt from "bcryptjs";


import "./login.css";

const Login = ({admin}) => {
 
  const [logEmail, setLogEmail] = useState("");
  const [logPassword, setLogPassword] = useState("");
  const [inEmail, setInEmail] = useState("");
  const [inPassword, setInPassword] = useState("");

  let session = false;
  const navigate = useNavigate();

  useEffect(() => {
    setInEmail(document.getElementById("inEmail"));
    setInPassword(document.getElementById("inPassword"));
    console.log(admin);
  }, []);

  //validación de email

  const testEmail = () => {
    if (validateEmail(inEmail.value)) {
      inEmail.className = "form-control is-valid";
      return true;
    } else {
      inEmail.className = "form-control is-invalid";
      return false;
    }
  };

  // validación de contraseña

  const testPassword = () => {
    if (validatePassword(inPassword.value)) {
      inPassword.className = "form-control is-valid";
      return true;
    } else {
      inPassword.className = "form-control is-invalid";
      return false;
    }
  };

  // test general

  const generalTesting = () => {
    if (
      logEmail === admin[0].email &&
      bcrypt.compareSync(logPassword, admin[0].password)
    ) {
      console.log("validado");

      return true;
    } else {
      console.log("no cumple validacion");

      return false;
    }
  };


  const hundleSubmit = (e) => {
    e.preventDefault();
    
    if (generalTesting()){

      session = true;
      sessionStorage.setItem("stateSession", JSON.stringify(session));
      Swal.fire({
        title: '¡Bienvenido Administrador!',
        icon: 'success'}
      );

      setTimeout(() => {
        navigate("/adminhome");
      }, 1000);



    }else if (testEmail()){
      Swal.fire("Ops!", "Por favor ingrese un email valido", "error");
      inEmail.className = "form-control is-invalid";
    }else if (testPassword()) {
      Swal.fire("Ops!", "Por favor ingrese una contraseña valida", "error");
      inPassword.className = "form-control is-invalid";
    } else {
      Swal.fire("Ops!", "Debe completar todos los campos", "error");
      inEmail.className = "form-control is-invalid";
      inPassword.className = "form-control is-invalid";
    }
    
  };

  return (
    <>
    <Fade bottom>
      <div className="container d-flex align-items-center my-3" >
       
       <Container style={{ width: '27rem', height: "26rem"}} className="border rounded border-dark border-1  bg-light">
         <div>
           <p className=" fs-2 text-danger text-center fw-light mt-2">Inicie Sesión</p>
           <hr className="text-dark"/>
           </div>
         <Form onSubmit={hundleSubmit} className="mx-3 text-light mt-3 ">
        <Form.Group className="mb-3 " >
          <Form.Label className="text-dark">Dirección</Form.Label>
          <Form.Control
          controlId="formBasicEmail"
            type="email"
            placeholder="Inserte su e-mail"
            id="inEmail"
            required
            onChange={({ target }) => {
              setLogEmail(target.value.trimStart());
              testEmail();
            }}
          />
          <Form.Control.Feedback type="invalid">
              Ingrese un email valido
            </Form.Control.Feedback>
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="text-dark">Clave</Form.Label>
          <Form.Control
            type="password"
            placeholder="Inserte su clave"
            id="inPassword"
              required
              minLength={8}
              maxLength={30}
              onChange={({ target }) => {
                setLogPassword(target.value.trimStart());
                testPassword();
              }}
            />
            <Form.Control.Feedback type="invalid">
              Ingrese una contraseña valida
            </Form.Control.Feedback>
          <div className="d-grid gap-2 col-6 mx-auto gap-2 mt-3 ">
          <Button variant="danger" type="submit" className="mt-2 rounded-pill">
            Ingresar
          </Button>
          </div>
        </Form.Group>
      </Form>

       </Container>
      </div>
      </Fade>
    </>
  );
};

export default Login;
