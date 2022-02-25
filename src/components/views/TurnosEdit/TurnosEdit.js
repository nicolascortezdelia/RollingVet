import React, { useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";

const TurnosEdit = ({ URL }) => {

  const [TurnoEd, setTurnoEd] = useState({});
  const {id} = useParams()

  useEffect( async () => {
    try {
      const res = await fetch(`${URL}/${id}`);
      const turnoApi = await res.json();
      setTurnoEd(turnoApi);
    } catch (error) {
      console.log(error)
    }
  }, []);


  return (
    <div>
      <Container className="my-5 container">
        <h1 className="text-center fw-bold ">Editar Turnos</h1>
        <hr />
        <Form className="my-3">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Nombre de la Mascota</Form.Label>
            <Form.Control type="text" placeholder="Nombre de la Mascota" defaultValue={TurnoEd.TurnoPetName}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Nombre Del Profesional</Form.Label>
            <Form.Control type="text" placeholder="Nombre del Profesional" defaultValue={TurnoEd.TurnoDoctor}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Detalle De la Cita</Form.Label>
            <Form.Control as="textarea" rows={3} defaultValue={TurnoEd.TurnoDetalle}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Fecha</Form.Label>
            <Form.Control type="date" placeholder="Escriba la fecha" defaultValue={TurnoEd.TurnoFecha}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Horario</Form.Label>
            <Form.Control type="time" placeholder="Escriba el horario" defaultValue={TurnoEd.TurnoHora}/>
          </Form.Group>
          <button className="btn btn-success">Editar</button>
        </Form>
      </Container>
    </div>
  );
};

export default TurnosEdit;
