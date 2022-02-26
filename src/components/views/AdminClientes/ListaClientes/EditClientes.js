import React from "react";
import {Form, Container} from "react-bootstrap"

const EditClientes = () => {
    return (
        <div>
            <Container className="py-5">
        <h1>Administrar Clientes</h1>
        <hr />
        {/* Form Product */}
        <Form className="my-5">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Escriba su Nombre" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Apellido</Form.Label>
            <Form.Control type="text" placeholder="Escriba su Apellido" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Correo Electronico</Form.Label>
            <Form.Control type="email" placeholder="Ejemplo@correo.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Numero De telefono</Form.Label>
            <Form.Control type="number" placeholder="+549XXXXXXXXXX" />
          </Form.Group>
          <hr />
          <h4>Informacion de la Mascotta</h4>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Nombre de la Mascota</Form.Label>
            <Form.Control type="text" placeholder="Escriba el nombre de su mascota" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Especie</Form.Label>
            <Form.Control type="text" placeholder="Indique la especie de su mascota" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Raza</Form.Label>
            <Form.Control type="text" placeholder="Indique la raza de su mascota" />
          </Form.Group>
          <div className="text-end">
            <button className="btn btn-success">Editar</button>
          </div>
        </Form>
      </Container>
        </div>
    );
};

export default EditClientes;