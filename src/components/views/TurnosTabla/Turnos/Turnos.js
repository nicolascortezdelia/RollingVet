import React from "react";
import { Link } from "react-router-dom";

const Turnos = ({ turno }) => {
  return (
    <tr>
      <td>{turno.id}</td>
      <td>{turno.turnoPetName}</td>
      <td>{turno.turnoDoctor}</td>
      <td>{turno.turnoDetalle}</td>
      <td>{turno.TurnoFecha}</td>
      <td>{turno.TurnoHora}</td>
      <td className="w-25">
        <div className="d-flex justify-content-center">
          <Link to="/Turnos/Edit" className="btn btn-success mx-1">
            Editar
          </Link>
          <button className="btn btn-danger mx-1">Borrar</button>
        </div>
      </td>
    </tr>
  );
};

export default Turnos;

// 01:29:00
