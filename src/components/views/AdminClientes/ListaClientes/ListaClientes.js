import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ListaClientes = ({cliente, URL, getApi}) => {
  const hundleDelete = (id)=>{
    //console.log(id)
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!'
    }).then(async(result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(`${URL}/${id}`, {method: "DELETE", headers:{"Content-Type": "application/json"}});
         // console.log(res);
         if (res.status === 200){
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          );
          getApi()
         }
        } catch (error) {
          console.log(error);
        }
        
      }
    })
  };
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
          <Link className="btn btn-success mx-1" to= {`/edit/clientes/${cliente.id}`}>Editar</Link>
           <button className="btn btn-danger mx-1"onClick={()=>hundleDelete(cliente.id)}>Eliminar</button>
        </div>
      </td>
    </tr>
    );
};

export default ListaClientes;