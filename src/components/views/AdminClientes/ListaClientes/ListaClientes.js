import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ListaClientes = ({ clientes, URL, getApi }) => {
  const hundleDelete = (id) => {
  
    Swal.fire({
      title: "Estas Seguro?",
      text: "No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "sí, borralo!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(`${URL}/${id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
          });
          
          if (res.status === 200) {
            Swal.fire("Borrado!", "Su turno ha sido eliminado.", "success");
            getApi();
          }
        } catch (error) {
          console.log(error);
        }
      }
    });
  };
  return (
    <tr>
      <td>{clientes.nombre}</td>
      <td>{clientes.apellido}</td>
      <td>{clientes.eMail}</td>
      <td>{clientes.telefono}</td>
      <td>{clientes.nombreMascota}</td>
      <td>{clientes.especie}</td>
      <td>{clientes.raza}</td>
      <td className="w-25">
        <div className="d-flex justify-content-center">
          <Link
            className="btn btn-success mx-1 rounded-pill"
            to={`/edit/clientes/${clientes._id}`}
          >
            Editar
          </Link>
          <button
            className="btn btn-danger mx-1 rounded-pill"
            onClick={() => hundleDelete(clientes._id)}
          >
            Eliminar
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ListaClientes;
