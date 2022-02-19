import React from 'react';
import { Form } from 'react-bootstrap';

const Pacientes = () => {
    return (
        <div>
            <h1>Datos de los pacientes</h1>
            <Form>
  <Form.Group className="mb-3" controlId="formMascota">
    <Form.Label>Nombre de la mascota</Form.Label>
    <Form.Control type="text" placeholder="Inserte el nombre del paciente" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formEdad">
    <Form.Label>Edad</Form.Label>
    <Form.Control type="text" placeholder="Inserte la edad de la mascota" />
  </Form.Group>
  <Form.Select aria-label="Default select example">
  <option>Seleccionar la especie</option>
  <option value="felino">Felino</option>
  <option value="canino">Canino</option>
  <option value="roedor">Roedor</option>
  <option value="reptil">Reptil</option>
  <option value="pez">Pez</option>
  <option value="ave">Ave</option>
</Form.Select>
<Form.Group className="mb-3" controlId="formPropietario">
    <Form.Label>Nombre del propietario</Form.Label>
    <Form.Control type="text" placeholder="Inserte el nombre del dueño" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formDNI">
    <Form.Label>DNI</Form.Label>
    <Form.Control type="number" placeholder="Inserte el número de documento" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formDireccion">
    <Form.Label>Direccion</Form.Label>
    <Form.Control type="text" placeholder="Insertar la dirección" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formTelefono">
    <Form.Label>Número de teléfono</Form.Label>
    <Form.Control type="number" placeholder="Inserte el teléfono" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formEmail">
    <Form.Label>E-Mail</Form.Label>
    <Form.Control type="text" placeholder="Inserte su email"/>
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
  
        </div>
    );
};

export default Pacientes;
