import React from "react";
import { Link } from "react-router-dom";

const Turnos = () => {
  return (
    <tr>
      <td>Fuffy</td>
      <td>Dr. Pepe Hongo</td>
      <td>Intoxicacion por alimentos en mal estado</td>
      <td>10/03/22</td>
      <td>10:00</td>
      <td className="w-25">
        <div className="d-flex justify-content-center">
          <Link className="btn btn-success mx-1" to="/Turnos/">
            Modificar
          </Link>
          <Link className="btn btn-danger mx-1">Eliminar</Link>
        </div>
      </td>
    </tr>
  );
};

export default Turnos;
