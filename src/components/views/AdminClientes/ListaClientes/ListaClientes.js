import React from 'react';
import { Link } from 'react-router-dom';

const ListaClientes = () => {
    return (
        <tr>
      <td>Nombre</td>
      <td>Apellido</td>
      <td>Correo Electronico</td>
      <td>Numero de telefono</td>
      <td>Nombre Mascota</td>
      <td>Especie</td>
      <td>Raza</td>
      <td className="w-25">
        <div className="d-flex justify-content-center">
          <Link className="btn btn-success mx-1" to= "/admin/clientes/create">Editar</Link>
          <Link className="btn btn-danger mx-1">Eliminar</Link>
        </div>
      </td>
    </tr>
    );
};

export default ListaClientes;