    import React from 'react';


const ListaTurnos = () => {
    return (
        <tr>
        <td>10:00</td>
        <td>Dr. Pepe Hongo</td>
        <td>Fuffy</td>
        <td>
          <p className="truncate-img-link m-0">
            Intoxicacion por alimentos en mal estado
          </p>
        </td>
        <td>10/03/22</td>
        <td className="w-25">
          <div className="d-flex justify-content-center">
            <button className="btn btn-success">Modificar</button>
            <button className="btn btn-danger">Borrar</button>
          </div>
        </td>
      </tr>
    );
};

export default ListaTurnos;