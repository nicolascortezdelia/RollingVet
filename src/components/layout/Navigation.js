import React from "react";
import { Button, Container, Nav, NavLink } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import "./Navigation.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <Navbar bg="withe fw-bolder" expand="lg" className="d-flex Container">
        <Container>
          <Navbar.Brand href="#/">
            <img
              alt=""
              src="/RollingVet.png"
              width="80"
              // height="100"
              className="logo d-inline-block align-center img-responsive"
            />{" "}
            RollingVet
          </Navbar.Brand>
          <div className="flex-row-reverse Container">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link className="nav-link" to="/contactos">Contactanos</Link>
                <Link className="nav-link" to="/">Sobre Nosotros</Link>
                <Button variant="outline-dark">LOGIN</Button>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
