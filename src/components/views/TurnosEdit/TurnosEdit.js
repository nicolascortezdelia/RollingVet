import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import {
  validateFecha,
  validateHora,
  validateNombre,
  validateNombreApellido,
  validatetextarea,
} from "../../Helpers/ValidacionesTurnos";

const TurnosEdit = ({ URL2, getAp }) => {
  const [TurnoEd, setTurnoEd] = useState({});
  const { id } = useParams();
  const TurnoPetNameRef = useRef("");
  const TurnoDoctorRef = useRef("");
  const TurnoDetalleRef = useRef("");
  const TurnoFechaRef = useRef("");
  const TurnoHoraRef = useRef("");

  const navigate = useNavigate();

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
      TurnoHora: TurnoHoraRef.current.value,
    };

    Swal.fire({
      title: "Esta Seguro?",
      text: "No podra revertir el cambio",
      icon: "warning",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
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
        <h3 className="text-center text-danger display-4">Editar Turnos</h3>
        <hr />
        <Row>
          <Col sm={12} md={6}>
            <div className="my-5">
              <img
                src="https://dojiw2m9tvv09.cloudfront.net/11787/product/royalcaninlatasvetdietrecoveryfeline-canine145gr25347.png"
                alt="perro en blanco y negro con su amigo el gato"
                className="img-fluid mt-5"
              />
            </div>
          </Col>
          <Col sm={12} md={6} className="my-4">
            <Form className="my-3" onSubmit={handleSubmit}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="fw-bold">
                  Nombre de la Mascota
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nombre de la Mascota"
                  defaultValue={TurnoEd.TurnoPetName}
                  ref={TurnoPetNameRef}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Label className="fw-bolder">Profesionales*</Form.Label>
                <Form.Select
                  value={TurnoEd.TurnoDoctor}
                  onChange={({ target }) =>
                    setTurnoEd({ ...TurnoEd, TurnoDoctor: target.value })
                  }
                  ref={TurnoDoctorRef}
                >
                  <option value="">Seleccione al profesional</option>
                  <option value="Dra Liza Morgan">Dra Liza Morgan</option>
                  <option value="Dr Adrian Munir">Dr Adrian Munir</option>
                </Form.Select>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label className="fw-bold">Detalle De la Cita</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  defaultValue={TurnoEd.TurnoDetalle}
                  ref={TurnoDetalleRef}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="fw-bold">Fecha</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Escriba la fecha"
                  defaultValue={TurnoEd.TurnoFecha}
                  ref={TurnoFechaRef}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Label className="fw-bolder">Horario*</Form.Label>
                <Form.Select
                  value={TurnoEd.TurnoHora}
                  onChange={({ target }) =>
                    setTurnoEd({ ...TurnoEd, TurnoHora: target.value })
                  }
                  ref={TurnoHoraRef}
                >
                  <option value="">Elija el horario</option>
                  <option value="09:00">09:00</option>
                  <option value="10:00">10:00</option>
                  <option value="11:00">11:00</option>
                  <option value="12:00">12:00</option>
                  <option value="16:00">16:00</option>
                  <option value="17:00">17:00</option>
                  <option value="18:00">18:00</option>
                  <option value="19:00">19:00</option>
                  <option value="20:00">20:00</option>
                </Form.Select>
              </Form.Group>
              <button className="btn btn-success">Guardar</button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TurnosEdit;
