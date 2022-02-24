import React from 'react';
import { Link } from 'react-router-dom';

const ListaClientes = ({cliente}) => {
    return (
        <tr>
      <td>{cliente.id}</td>
      <td>{cliente.nombre}</td>
      <td>{cliente.apellido}</td>
      <td>{cliente.eMail}</td>
      <td>{cliente.telefono}</td>
      <td>{cliente.nombreMascota}</td>
      <td>{cliente.especie}</td>
      <td>{cliente.raza}</td>
      <td className="w-25">
        <div className="d-flex justify-content-center">
          <Link className="btn btn-success mx-1" to= "/admin/clientes/create">Editar</Link>
           <button className="btn btn-danger mx-1">Eliminar</button>
        </div>
      </td>
    </tr>
    );
};

export default ListaClientes;