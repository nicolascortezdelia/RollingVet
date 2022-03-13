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
      <Row>
        <Col sm={12} md={3}></Col>
          <div><p>sadsd</p></div>
        <Col sm={12} md={6}>
          <Container className="py-5">
            <h3 className="text-center text-danger display-4">
              Agendar Pacientes
            </h3>
            <hr />

            <Form className="my-5" onSubmit={hundleSubmit}>
              <h4>Informacion del Cliente</h4>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Escriba su Nombre"
                  onChange={(e) => setNombre(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Escriba su Apellido"
                  onChange={(e) => setApellido(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Correo Electronico</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="ejemplo@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Numero De telefono</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="ej: +549 11 459977"
                  onChange={(e) => setTelefono(e.target.value)}
                />
              </Form.Group>
              <hr />
              <h4>Informacion de la Mascota</h4>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Nombre de la Mascota</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Escriba el nombre de su mascota"
                  onChange={(e) => setNombreMascota(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Especie</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Indique la especie de su mascota"
                  onChange={(e) => setEspecie(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Raza</Form.Label>
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
          </Container>
        </Col>

        <Col sm={12} md={3}>
        <div><p>sadsd</p></div>
        </Col>
      </Row>
    </div>
  );
};

export default AdminClientesCreate;
