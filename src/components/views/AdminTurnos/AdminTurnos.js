import React from "react";
import { Container, Table } from "react-bootstrap";
import ListaTurnos from "./ListaTurnos/ListaTurnos";


const AdminTurnos = () => {
  return (
    <div>
      <Container className="py-5">
        <div className="d-flex align-items-center justify-content-between">
          <h1>Lista Turnos</h1>
          <button className="btn btn-primary">Agregar Turno</button>
        </div>
        <hr />
        {/* Table of products */}
        <Table bordered hover responsive className="align-middle mt-3">
          <thead>
            <tr>
              <th>Horario</th>
              <th>Veterinario</th>
              <th>Nombre Mascota</th>
              <th>Detalle de la cita</th>
              <th>Fecha</th>
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
