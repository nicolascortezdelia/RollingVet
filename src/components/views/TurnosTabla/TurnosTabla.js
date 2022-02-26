import React from "react";
import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Turnos from "./Turnos/Turnos";

const TurnosTabla = () => {
  return (
    <div>
      <Container className="py-5">
        <div className="d-flex align-items-center justify-content-between">
          <h1>Lista Turnos</h1>
          <Link className="btn btn-primary" to="/Turnos/Create">
            Agregar Turno
          </Link>
        </div>
        <hr />
        <Table bordered hover responsive className="align-middle mt-3">
          <thead>
            <tr>
              <th>Nombre Mascota</th>
              <th>Veterinario</th>
              <th>Detalle de la cita</th>
              <th>Fecha</th>
              <th>Horario</th>
            </tr>
          </thead>
          <tbody>
            <Turnos />
            <Turnos />
            <Turnos />
            <Turnos />
            <Turnos />
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default TurnosTabla;
