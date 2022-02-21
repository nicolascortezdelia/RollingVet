    import React from 'react';
import { Link } from 'react-router-dom';


const ListaTurnos = () => {
    return (
        <tr>
        <td>Fuffy</td>
        <td>Dr. Pepe Hongo</td>
        <td>
          <p className="truncate-img-link m-0">
            Intoxicacion por alimentos en mal estado
          </p>
        </td>
        <td>10/03/22</td>
        <td>10:00</td>
        <td className="w-25">
          <div className="d-flex justify-content-center">
            <Link className="btn btn-success mx-1"to="/admin/turnos/create">Modificar</Link>
            <Link className="btn btn-danger mx-1" >Eliminar</Link>
          </div>
        </td>
      </tr>
    );
};

export default ListaTurnos;