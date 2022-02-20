import React from 'react';
import {Form} from 'react-bootstrap';

const Turnos = () => {
    return (
        <div>
            <div>
            <h1>Creación de turnos</h1>
            <Form>
  <Form.Group className="mb-3" controlId="idMascota">
    <Form.Label>Nombre de la mascota</Form.Label>
    <Form.Control type="text" placeholder="Inserte el nombre de la mascota" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="idEdad">
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
<Form.Group className="mb-3" controlId="idropietario">
    <Form.Label>Nombre del propietario</Form.Label>
    <Form.Control type="text" placeholder="Inserte el nombre del dueño" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="idDNI">
    <Form.Label>DNI</Form.Label>
    <Form.Control type="number" placeholder="Inserte el número de documento" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="idDireccion">
    <Form.Label>Direccion</Form.Label>
    <Form.Control type="text" placeholder="Insertar la dirección" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="idTelefono">
    <Form.Label>Número de teléfono</Form.Label>
    <Form.Control type="number" placeholder="Inserte el teléfono" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="idEmail">
    <Form.Label>E-Mail</Form.Label>
    <Form.Control type="text" placeholder="Inserte su email"/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="idFecha">
    <Form.Label>Fecha</Form.Label>
    <Form.Control type="date" placeholder="Inserte su email"/>
  </Form.Group>
  <Form.Select aria-label="Default select example">
  <option>Seleccionar un horario</option>
  <option value="09:00">09:00</option>
  <option value="09:30">09:30</option>
  <option value="10:00">10:00</option>
  <option value="10:30">10:30</option>
  <option value="11:00">11:00</option>
  <option value="11:30">11:30</option>
  <option value="12:00">12:00</option>
  <option value="12:30">12:30</option>
  <option value="13:00">13:00</option>
  <option value="13:30">13:30</option>
  <option value="14:00">14:00</option>
  <option value="14:30">14:30</option>
  <option value="15:00">15:00</option>
  <option value="15:30">15:30</option>
  <option value="16:00">16:00</option>
  <option value="16:30">16:30</option>
  <option value="17:00">17:00</option>
  <option value="17:30">17:30</option>
  <option value="18:00">18:00</option>
  <option value="18:30">18:30</option>
  <option value="19:00">19:00</option>
</Form.Select>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
  
        </div>
        </div>
    );
};

export default Turnos;