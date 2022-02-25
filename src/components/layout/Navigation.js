import React from "react";
import { Container, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import "./Navigation.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <Navbar bg=" fw-bolder" expand="lg" className="d-flex m-0 p-0">
        <Container>
          <Link to="/" className="text-decoration-none p-0">
            <img
              alt="logo RollingVet"
              src="/RollingVet.png"
              width="100"
              height="100"
              className="logo d-inline-block align-center img-responsive "
            />{" "}
          </Link>

          <div className="flex-row-reverse">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto ">
              <Link className="nav-link" to="/planes">
                  Planes
                </Link>
                <Link className="nav-link" to="/contactos">
                  Contactanos
                </Link>
                <Link className="nav-link" to="*">
                  Sobre Nosotros
                </Link>
                <Link
                  className=" nav-link outline-dark border border-dark rounded"
                  to="/login"
                >
                  LOGIN
                </Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
