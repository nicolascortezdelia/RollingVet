import React from "react";
import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Turnos from "./Turnos/Turnos";

const TurnosTabla = ({ turnos, URL2 , getAp}) => {
  return (
    <div>
      <Container className="py-5">
        <div className="d-flex align-items-center justify-content-between">
          <h1 className=" text-danger display-4">Lista de Turnos</h1>
          <Link className="btn btn-primary rounded-pill" to="/Turnos/Create">
            Agregar Turno
          </Link>
        </div>
        <hr />
        <Table bordered hover responsive className="align-middle mt-3">
          <thead>
            <tr>
              <th>N°</th>
              <th>Nombre Mascota</th>
              <th>Veterinario</th>
              <th>Detalle de la cita</th>
              <th>Fecha</th>
              <th>Horario</th>
            </tr>
          </thead>
          <tbody>
            {turnos.map((turno) => (
              <Turnos key={turno._id} turno={turno} URL2={URL2} getAp={getAp} />
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default TurnosTabla;
