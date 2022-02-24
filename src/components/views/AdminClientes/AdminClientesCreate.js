import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';

const AdminClientesCreate = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState(0);
  const [nombreMascota, setNombreMascota] = useState("");
  const [especie, setEspecie] = useState("");
  const [raza, setRaza] = useState("");

  //funcion para crear un objeto
  const hundleSubmit = (e)=>{e.preventDefault()};

    return (
        <div>
            <Container className="py-5">
        <h1>Administrar Clientes</h1>
        <hr />
        {/* Form Product */}
        <Form className="my-5" onSubmit={hundleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Escriba su Nombre" onChange={(e)=>setNombre(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Apellido</Form.Label>
            <Form.Control type="text" placeholder="Escriba su Apellido" onChange={(e)=>setApellido(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Correo Electronico</Form.Label>
            <Form.Control type="email" placeholder="Ejemplo@correo.com" onChange={(e)=>setEmail(e.value.target)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Numero De telefono</Form.Label>
            <Form.Control type="number" placeholder="+549XXXXXXXXXX" onChange={(e)=>setTelefono(e.target.value)} />
          </Form.Group>
          <hr />
          <h4>Informacion de la Mascotta</h4>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Nombre de la Mascota</Form.Label>
            <Form.Control type="text" placeholder="Escriba el nombre de su mascota" onChange={(e)=>setNombreMascota(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Especie</Form.Label>
            <Form.Control type="text" placeholder="Indique la especie de su mascota" onChange={(e)=> setEspecie(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Raza</Form.Label>
            <Form.Control type="text" placeholder="Indique la raza de su mascota" onChange={(e)=>setRaza(e.target.value)} />
          </Form.Group>
          <div className="text-end">
            <button className="btn btn-success">Guardar</button>
            <button className="btn btn-success">Eliminar</button>
          </div>
        </Form>
      </Container>
        </div>
    );
};

export default AdminClientesCreate;