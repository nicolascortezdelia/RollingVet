import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Turnos = ({ turno, URL2, getAp }) => {
  const handleDelete = (id) => {
    Swal.fire({
      title: "Esta Seguro?",
      text: "Una vez eliminado el turno no hay forma de revertirlo!",
      icon: "warning",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      showCancelButton: true,
      confirmButtonText: "Eliminar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(`${URL2}/${id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          });
          if (res.status === 200) {
            Swal.fire("Eliminado!", "Su turno fue eliminado.", "success");
            getAp();
          }
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  return (
    <tr>
      <td>{turno.id}</td>
      <td>{turno.TurnoPetName}</td>
      <td>{turno.TurnoDoctor}</td>
      <td>{turno.TurnoDetalle}</td>
      <td>{turno.TurnoFecha}</td>
      <td>{turno.TurnoHora}</td>
      <td className="w-25">
        <div className="d-flex justify-content-center ">
          <Link
            to={`/Turnos/Edit/${turno.id}`}
            className="btn btn-success mx-1 rounded-pill"
          >
            Editar
          </Link>
          <button
            className="btn btn-danger mx-1 rounded-pill"
            onClick={() => handleDelete(turno.id)}
          >
            Borrar
          </button>
        </div>
      </td>
    </tr>
  );
};

export default Turnos;
