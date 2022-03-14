import React, { useEffect, useRef, useState } from "react";
import { Form, Container, Col, Row } from "react-bootstrap";
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
      confirmButtonText: 'Editar!'
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
        <h3 className="text-center text-danger display-4">Administrar Clientes</h3>
        <hr />
        <Row>
          <Col sm={12} md={6}>
            <div>
              <img
                src="https://cdn.royalcanin-weshare-online.io/AGnN0GYBG95Xk-RB3t6O/v1/german-shepherd-adult-maine-coon-emblematic"
                alt="perro en blanco y negro con su amigo el gato"
                className="img-fluid mt-5"
              />
            </div>
            <div>
              <img
                src="https://dojiw2m9tvv09.cloudfront.net/11787/product/royalcaninlatasvetdietrecoveryfeline-canine145gr25347.png"
                alt="perro en blanco y negro con su amigo el gato"
                className="img-fluid mt-5"
              />
            </div>
          </Col>
          <Col sm={12} md={6} className="my-4">
        <Form className="my-5" onSubmit={hundleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="fw-bolder">Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Escriba su Nombre"
              defaultValue={producto.nombre}
              ref={nombreRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="fw-bolder">Apellido</Form.Label>
            <Form.Control
              type="text"
              placeholder="Escriba su Apellido"
              defaultValue={producto.apellido}
              ref={apellidoRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="fw-bolder">Correo Electronico</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ejemplo@correo.com"
              defaultValue={producto.eMail}
              ref={eMailRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="fw-bolder">Numero De telefono</Form.Label>
            <Form.Control
              type="number"
              placeholder="+549XXXXXXXXXX"
              defaultValue={producto.telefono}
              ref={telefonoRef}
            />
          </Form.Group>
          <hr />
          <h4 className="text-danger">Informacion de la Mascotta</h4>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="fw-bolder">Nombre de la Mascota</Form.Label>
            <Form.Control
              type="text"
              placeholder="Escriba el nombre de su mascota"
              defaultValue={producto.nombreMascota}
              ref={nombreMascotaRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Label className="fw-bolder">Especie*</Form.Label>
                <Form.Select value={producto.especie} onChange={({target})=> setProducto({...producto, especie : target.value})} ref={especieRef}>
                  <option value="">Seleccione una opcion</option>
                  <option value="Perro">Perro</option>
                  <option value="Gato">Gato</option>
                  <option value="Otro">Otro</option>
                </Form.Select>
              </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="fw-bolder">Raza</Form.Label>
            <Form.Control
              type="text"
              placeholder="Indique la raza de su mascota"
              defaultValue={producto.raza}
              ref={razaRef}
            />
          </Form.Group>
          <div className="text-end">
            <button className="btn btn-success">Guardar</button>
          </div>
        </Form>
        </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EditClientes;
