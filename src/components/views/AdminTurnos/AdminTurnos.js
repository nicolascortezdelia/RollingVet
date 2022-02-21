import React from "react";
import { Container, Table } from "react-bootstrap";
import ListaTurnos from "./ListaTurnos/ListaTurnos";
import { Link } from "react-router-dom";


const AdminTurnos = () => {
  return (
    <div>
      <Container className="py-5">
        <div className="d-flex align-items-center justify-content-between">
          <h1>Lista Turnos</h1>
          <Link className="btn btn-primary" to="/admin/turnos/create">Agregar Turno</Link>
        </div>
        <hr />
        {/* Table of products */}
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
            <ListaTurnos />
            <ListaTurnos />
            <ListaTurnos />
            <ListaTurnos />
            <ListaTurnos />
          </tbody>
        </Table>
        {/* No products found message */}
        {/* <div className="no-products-found d-flex align-items-center justify-content-center">
          <h1>🥐 No products found ☕</h1>
        </div> */}
      </Container>
    </div>
  );
};

export default AdminTurnos;
