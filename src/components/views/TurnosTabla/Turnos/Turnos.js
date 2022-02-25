import React from "react";
import { Link } from "react-router-dom";

const Turnos = ({ turno }) => {
  return (
    <tr>
      <td>{turno.id}</td>
      <td>{turno.TurnoPetName}</td>
      <td>{turno.TurnoDoctor}</td>
      <td>{turno.TurnoDetalle}</td>
      <td>{turno.TurnoFecha}</td>
      <td>{turno.TurnoHora}</td>
      <td className="w-25">
        <div className="d-flex justify-content-center">
          <Link to={`/Turnos/Edit/${turno.id}`} className="btn btn-success mx-1">
            Editar
          </Link>
          <button className="btn btn-danger mx-1">Borrar</button>
        </div>
      </td>
    </tr>
  );
};

export default Turnos;


