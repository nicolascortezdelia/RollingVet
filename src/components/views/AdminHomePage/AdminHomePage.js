import React, {useEffect} from 'react';
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const AdminHomePage = () => {

    const redirect = useNavigate();
    const session = JSON.parse(sessionStorage.getItem("stateSession")) || false;
  
    const checkSession=()=>{
      if (!session) {
        redirect("/Login");
      }      
    }
  
    useEffect(()=>{
      checkSession();
    },[]);

    return (
        <Container >
            <div className="mb-2">
                <h1 className=" display-2  text-danger fst-bold text-center  ">
                  ¡Bienvenido Administrador!
                </h1>
             

                </div>
        <Row className='mt-5'>
          <Col sm={12} md={6} className="mb-5 ">
            <Card className="text-center shadow">
              <Card.Body>
              <img
                    src="https://images.pexels.com/photos/5695434/pexels-photo-5695434.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="perro en blanco y negro jugando con pelota roja"
                    className="img-fluid"
                  />
                <h2>Pacientes</h2>
                <Card.Text>
                Ver el listado de pacientes
              </Card.Text>
            
                <Link to="/admin/clientes"> <Button variant="danger" className="color-navbar rounded-pill">Ver más</Button></Link>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} className="mb-5">
            <Card className="text-center shadow ">
              <Card.Body>
              <img
                    src="https://images.pexels.com/photos/6235230/pexels-photo-6235230.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="perro en blanco y negro jugando con pelota roja"
                    className="img-fluid"
                  />
                <h2>Turnos</h2>
                <Card.Text>
                Ver el listado de turnos
              </Card.Text>
                <Link to="/turnos/tabla"> <Button variant="danger" className="color-navbar rounded-pill">Ver más</Button></Link>
              </Card.Body>
            </Card>
          </Col>
          
        </Row>
      </Container>
      
    );
};

export default AdminHomePage;