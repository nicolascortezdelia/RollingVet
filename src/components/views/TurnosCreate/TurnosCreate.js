import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {
  validateFecha,
  validateHora,
  validateNombre,
  validateNombreApellido,
  validatetextarea,
} from "../../helpers/validacionesTurnos";

const TurnosCreate = ({ URL2, getAp }) => {
  const [TurnoPetName, setTurnoPetName] = useState("");
  const [TurnoDoctor, setTurnoDoctor] = useState("");
  const [TurnoDetalle, setTurnoDetalle] = useState("");
  const [TurnoFecha, setTurnoFecha] = useState("");
  const [TurnoHora, setTurnoHora] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !validateNombreApellido(TurnoPetName) ||
      !validateNombre(TurnoDoctor) ||
      !validatetextarea(TurnoDetalle) ||
      !validateFecha(TurnoFecha) ||
      !validateHora(TurnoHora)
    ) {
      Swal.fire("Ops!", "Llene correctamente los casilleros.", "error");
      return;
    }
    const nuevoTurno = {
      TurnoPetName,
      TurnoDoctor,
      TurnoDetalle,
      TurnoFecha,
      TurnoHora,
    };

    Swal.fire({
      title: "Esta seguro?",
      text: "No podra revertir este paso!",
      icon: "warning",
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      showCancelButton: true,
      confirmButtonText: "Guardar!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(URL2, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(nuevoTurno),
          });
          if (res.status === 201) {
            Swal.fire(
              "Turno Agregado!",
              "Su turno fue creado exitosamente.",
              "success"
            );
            getAp();
            navigate("/Turnos/Tabla");
          }
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  return (
    <div>
      <Container className="my-5 container">
        <h3 className="text-center text-danger display-4">Agendar Turnos</h3>
        <hr />
        <Form className="my-3" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="fw-bold">Nombre de la Mascota</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombre de la Mascota"
              onChange={({ target }) => setTurnoPetName(target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="fw-bold" >Nombre Del Profesional</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombre del Profesional"
              onChange={({ target }) => setTurnoDoctor(target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="fw-bold" >Detalle De la Cita</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              onChange={({ target }) => setTurnoDetalle(target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="fw-bold">Fecha</Form.Label>
            <Form.Control
              type="date"
              placeholder="Escriba la fecha"
              onChange={({ target }) => setTurnoFecha(target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="fw-bold">Horario</Form.Label>
            <Form.Control
              type="time"
              placeholder="Escriba el horario"
              onChange={({ target }) => setTurnoHora(target.value)}
            />
          </Form.Group>
          <button className="btn btn-success">Guardar</button>
        </Form>
      </Container>
    </div>
  );
};

export default TurnosCreate;