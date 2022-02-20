import React from 'react';

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
          <button className="btn btn-success mx-1">Editar</button>
          <button className="btn btn-danger mx-1">Eliminar</button>
        </div>
      </td>
    </tr>
    );
};

export default ListaClientes;