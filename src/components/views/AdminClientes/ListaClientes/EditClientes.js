import React, { useEffect, useRef, useState } from "react";
import { Form, Container } from "react-bootstrap";
import {
  validateNames,
  validateTel,
  validateEmail,
} from "../../../Helpers/validacionesPacientes";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ListaClientes from "./ListaClientes";

const EditClientes = ({ URL, getApi}) => {
  const [producto, setProducto] = useState({});
  //parametro
  const { id } = useParams();
  // Referencias
  const nombreRef = useRef("");
  const apellidoRef = useRef("");
  const eMailRef = useRef("");
  const telefonoRef = useRef("");
  const nombreMascotaRef = useRef("");
  const especieRef = useRef("");
  const razaRef = useRef("");

  // funion para navegar entre rutas
  const navegacion = useNavigate();

  useEffect(async () => {
    try {
      const res = await fetch(`${URL}/${id}`);
      const productoApi = await res.json();
      // console.log(productoApi);
      setProducto(productoApi);
    } catch (error) {
      console.log(error);
    }
  }, []);
  // Funcion para editar los datos de los pacientes
  const hundleSubmit = (e) => {
    e.preventDefault();
    // validar los datos
    if (
      !validateNames(nombreRef.current.value) ||
      !validateNames(apellidoRef.current.value) ||
      !validateEmail(eMailRef.current.value) ||
      !validateTel(telefonoRef.current.value) ||
      !validateNames(nombreMascotaRef.current.value) ||
      !validateNames(especieRef.current.value) ||
      !validateNames(razaRef.current.value)
    ) {
      Swal.fire("Perfecto!", "Validación correcta.", "success");
     // return 
    }
    console.log("datos correctos");
    // Guardar los datos modificados
    const productoEditado = {
      nombre: nombreRef.current.value,
      apellido: apellidoRef.current.value,
      eMail: eMailRef.current.value,
      telefono: telefonoRef.current.value,
      nombreMascota: nombreMascotaRef.current.value,
      especie: especieRef.current.value,
      raza: razaRef.current.value
    }
     console.log(productoEditado);
     Swal.fire({
      title: 'Estas seguro?',
      text: "No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'sí, crealo!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(`${URL}/${id}`, {method: "PUT", headers:{"Content-Type": "application/json"}, body: JSON.stringify(productoEditado)})
          console.log(res);
          if(res.status === 200){
            Swal.fire(
              'Modificado!',
              'Tu archivo ha sido modificado.',
              'success'
            );
            getApi();
            navegacion("/admin/clientes");
          }
        } catch (error) {
          console.log(error);
        }
        Swal.fire(
          'Modificado!',
          'Datos modificados.',
          'success'
        )
      }
    })
  };
  return (
    <div>
      <Container className="py-5">
        <h1>Administrar Clientes</h1>
        <hr />
        {/* Form Product */}
        <Form className="my-5" onSubmit={hundleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Escriba su Nombre"
              defaultValue={producto.nombre}
              ref={nombreRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              type="text"
              placeholder="Escriba su Apellido"
              defaultValue={producto.apellido}
              ref={apellidoRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Correo Electronico</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ejemplo@correo.com"
              defaultValue={producto.eMail}
              ref={eMailRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Numero De telefono</Form.Label>
            <Form.Control
              type="number"
              placeholder="+549XXXXXXXXXX"
              defaultValue={producto.telefono}
              ref={telefonoRef}
            />
          </Form.Group>
          <hr />
          <h4>Informacion de la Mascotta</h4>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Nombre de la Mascota</Form.Label>
            <Form.Control
              type="text"
              placeholder="Escriba el nombre de su mascota"
              defaultValue={producto.nombreMascota}
              ref={nombreMascotaRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Especie</Form.Label>
            <Form.Control
              type="text"
              placeholder="Indique la especie de su mascota"
              defaultValue={producto.especie}
              ref={especieRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Raza</Form.Label>
            <Form.Control
              type="text"
              placeholder="Indique la raza de su mascota"
              defaultValue={producto.raza}
              ref={razaRef}
            />
          </Form.Group>
          <div className="text-end">
            <button className="btn btn-success">Editar</button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default EditClientes;
