import React, { useEffect, useRef, useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import {
  validateFecha,
  validateHora,
  validateNombre,
  validateNombreApellido,
  validatetextarea,
} from "../../Helpers/validaciones";

const TurnosEdit = ({ URL }) => {
  const [TurnoEd, setTurnoEd] = useState({});
  const { id } = useParams();
  const TurnoPetNameRef = useRef("");
  const TurnoDoctorRef = useRef("");
  const TurnoDetalleRef = useRef("");
  const TurnoFechaRef = useRef("");
  const TurnoHoraRef = useRef("");

  useEffect(async () => {
    try {
      const res = await fetch(`${URL}/${id}`);
      const turnoApi = await res.json();
      setTurnoEd(turnoApi);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(TurnoPetNameRef.current.value);

    if (
      !validateNombreApellido(TurnoPetNameRef.current.value) ||
      !validateNombre(TurnoDoctorRef.current.value) ||
      !validatetextarea(TurnoDetalleRef.current.value) ||
      !validateFecha(TurnoFechaRef.current.value) ||
      !validateHora(TurnoHoraRef.current.value)
    ) {
      Swal.fire("Ops!", "Llene correctamente los casilleros.", "error");
      return;
    }
    console.log('Datos bien cargados')
  };

  return (
    <div>
      <Container className="my-5 container">
        <h1 className="text-center fw-bold ">Editar Turnos</h1>
        <hr />
        <Form className="my-3" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Nombre de la Mascota</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombre de la Mascota"
              defaultValue={TurnoEd.TurnoPetName}
              ref={TurnoPetNameRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Nombre Del Profesional</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombre del Profesional"
              defaultValue={TurnoEd.TurnoDoctor}
              ref={TurnoDoctorRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Detalle De la Cita</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              defaultValue={TurnoEd.TurnoDetalle}
              ref={TurnoDetalleRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Fecha</Form.Label>
            <Form.Control
              type="date"
              placeholder="Escriba la fecha"
              defaultValue={TurnoEd.TurnoFecha}
              ref={TurnoFechaRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Horario</Form.Label>
            <Form.Control
              type="time"
              placeholder="Escriba el horario"
              defaultValue={TurnoEd.TurnoHora}
              ref={TurnoHoraRef}
            />
          </Form.Group>
          <button className="btn btn-success">Editar</button>
        </Form>
      </Container>
    </div>
  );
};

export default TurnosEdit;
