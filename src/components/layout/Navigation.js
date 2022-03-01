import React from "react";
import { Container, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import "./Navigation.css";
import { Link } from "react-router-dom";


const Navigation = () => {
  return (
    <>
      <Navbar bg="white" expand="lg">
        <Container>
          <Navbar.Brand>
<Link to="/" className="text-decoration-none p-0">

            <img
              alt="logo RollingVet"
              src="/RollingVet.png"
              width="100"
              height="100"
              className="logo d-inline-block align-center img-responsive "
            />
</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
            <Link className="nav-link" to="/turnos/tabla">
                  Administrar Turnos
                </Link>
            <Link className="nav-link" to="/planes">
                Planes
              </Link>
              <Link className="nav-link" to="/contactos">
                Contactanos
              </Link>
              <Link className="nav-link" to="*">
                Sobre nosotros
              </Link>
              <Link
                className=" nav-link outline-dark"
                to="/login"
              >
                LOGIN
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  );
};

export default Navigation;
