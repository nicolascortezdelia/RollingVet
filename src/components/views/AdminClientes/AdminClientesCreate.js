import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import {
  validateNames,
  validateTel,
  validateEmail,
} from "../../Helpers/validacionesPacientes";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AdminClientesCreate = ({ URL, getApi }) => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [eMail, setEmail] = useState("");
  const [telefono, setTelefono] = useState(0);
  const [nombreMascota, setNombreMascota] = useState("");
  const [especie, setEspecie] = useState("");
  const [raza, setRaza] = useState("");

  // funion para navegar entre rutas
  const navegacion = useNavigate();
  //funcion para crear un objeto
  const hundleSubmit = async (e) => {
    e.preventDefault();

    //validacion de los campos
    if (
      !validateNames(nombre) ||
      !validateNames(apellido) ||
      !validateEmail(eMail) ||
      !validateTel(telefono) ||
      !validateNames(nombreMascota) ||
      !validateNames(especie) ||
      !validateNames(raza)
    ) {
      Swal.fire("Ops!", "Algunos datos ingresados no son validos", "error");
      // return
    }
    //envio de los datos para guardarlos
    const newPaciente = {
      nombre,
      apellido,
      eMail,
      telefono,
      nombreMascota,
      especie,
      raza,
    };
    Swal.fire({
      title: "Estás seguro?",
      text: "Quieres guardar los datos",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Turno guardado!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newPaciente),
          });
          // console.log(res);
          if (res.status === 201) {
            Swal.fire("Creado!", "Turno creado.", "success");
            getApi();
            navegacion("/admin/clientes");
          }
        } catch (error) {
          console.log(error);
        }
      }
    });
  };
  return (
    <div>
      <Container className="py-5">
        <h3 className="text-center text-danger display-4">Agendar Pacientes</h3>
        <hr />
        <Row>
          <Col sm={12} md={6}>
            <div>
              <img
                src="https://cdn.royalcanin-weshare-online.io/AGnN0GYBG95Xk-RB3t6O/v1/german-shepherd-adult-maine-coon-emblematic"
                alt="perro en blanco y negro con su amigo el gato"
                className="img-fluid mt-5"
              />
            </div>
            <div>
              <img
                src="https://dojiw2m9tvv09.cloudfront.net/11787/product/royalcaninlatasvetdietrecoveryfeline-canine145gr25347.png"
                alt="perro en blanco y negro con su amigo el gato"
                className="img-fluid mt-5"
              />
            </div>
          </Col>
          <Col sm={12} md={6} className="my-4">
            <Form className="my-5" onSubmit={hundleSubmit}>
              <h4>Informacion del Cliente</h4>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="fw-bolder">Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Escriba su Nombre"
                  onChange={(e) => setNombre(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="fw-bolder">Apellido</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Escriba su Apellido"
                  onChange={(e) => setApellido(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="fw-bolder">
                  Correo Electronico
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="ejemplo@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="fw-bolder">
                  Numero De telefono
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="ej: +549 11 459977"
                  onChange={(e) => setTelefono(e.target.value)}
                />
              </Form.Group>
              <hr />
              <h4>Informacion de la Mascota</h4>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="fw-bolder">
                  Nombre de la Mascota
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Escriba el nombre de su mascota"
                  onChange={(e) => setNombreMascota(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Label className="fw-bolder">Especie*</Form.Label>
                <Form.Select>
                  <option value="">Seleccione una opcion</option>
                  <option value="bebida-caliente">Perro</option>
                  <option value="bebida-fria">Gato</option>
                  <option value="bebida-fria">Otro</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="fw-bolder">Raza</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Indique la raza de su mascota"
                  onChange={(e) => setRaza(e.target.value)}
                />
              </Form.Group>
              <div className="text-end">
                <button className="btn btn-success">Guardar</button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AdminClientesCreate;
