import React, { useEffect, useRef, useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import {
  validateFecha,
  validateHora,
  validateNombre,
  validateNombreApellido,
  validatetextarea,
} from "../../helpers/validacionesTurnos"

const TurnosEdit = ({ URL2,getAp }) => {
  const [TurnoEd, setTurnoEd] = useState({});
  const { id } = useParams();
  const TurnoPetNameRef = useRef("");
  const TurnoDoctorRef = useRef("");
  const TurnoDetalleRef = useRef("");
  const TurnoFechaRef = useRef("");
  const TurnoHoraRef = useRef("");

  const navigate = useNavigate()

  useEffect(async () => {
    try {
      const res = await fetch(`${URL2}/${id}`);
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
    const turnosEditado = {
      TurnoPetName: TurnoPetNameRef.current.value,
      TurnoDoctor: TurnoDoctorRef.current.value,
      TurnoDetalle: TurnoDetalleRef.current.value,
      TurnoFecha: TurnoFechaRef.current.value,
      TurnoHora: TurnoFechaRef.current.value,
    };

    Swal.fire({
      title: "Esta Seguro?",
      text: "No podra revertir el cambio",
      icon: "warning",
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      showCancelButton: true,
      confirmButtonText: "Editar!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(`${URL2}/${id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(turnosEditado),
          });
          if (res.status === 200) {
            Swal.fire("Actualizado!", "Turno Editado.", "success");
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
        <h1 className="text-danger display-4">Editar Turnos</h1>
        <hr />
        <Form className="my-3" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="fw-bold">Nombre de la Mascota</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombre de la Mascota"
              defaultValue={TurnoEd.TurnoPetName}
              ref={TurnoPetNameRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="fw-bold">Nombre Del Profesional</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombre del Profesional"
              defaultValue={TurnoEd.TurnoDoctor}
              ref={TurnoDoctorRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="fw-bold">Detalle De la Cita</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              defaultValue={TurnoEd.TurnoDetalle}
              ref={TurnoDetalleRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="fw-bold">Fecha</Form.Label>
            <Form.Control
              type="date"
              placeholder="Escriba la fecha"
              defaultValue={TurnoEd.TurnoFecha}
              ref={TurnoFechaRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="fw-bold">Horario</Form.Label>
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