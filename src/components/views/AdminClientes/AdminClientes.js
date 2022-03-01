import React from 'react';
import { Container, Table } from 'react-bootstrap';
import ListaClientes from './ListaClientes/ListaClientes';
import { Link } from 'react-router-dom';

const AdminClientes = ({cliente, URL, getApi}) => {
    return (
        <div>
        <Container className="py-5">
          <div className="d-flex align-items-center justify-content-between">
          <h3 className="text-center text-danger display-4">Lista de Pacientes</h3>
            <Link to="/admin/clientes/create" className="btn btn-primary rounded-pill">Agregar Pacientes</Link>
          </div>
          <hr />
            <Table bordered hover responsive className="align-middle mt-3">
            <thead>
              <tr>
                <th>N.</th>
                <th>Nomnbre</th>
                <th>Apellido</th>
                <th>E-mail</th>
                <th>Telefono</th>
                <th>Nombre Mascota</th>
                <th>Especie</th>
                <th>Raza</th>
                
              </tr>
            </thead>
            <tbody>
             {cliente.map((clientes)=>(<ListaClientes key={clientes._id} clientes={clientes} URL={URL} getApi={getApi}/>))};
              
            </tbody>
          </Table>
          
        </Container>
      </div>
    );
};

export default AdminClientes;