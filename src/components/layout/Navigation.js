import React from "react";
import { Container, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import "./Navigation.css";
import Swal from 'sweetalert2'
import { Link, useNavigate } from "react-router-dom";


const Navigation = () => {

  let session = JSON.parse(sessionStorage.getItem("stateSession") || false);
  const navigate = useNavigate();

  const handleLogOut = () => {
    if (session) {
      session = false;
      sessionStorage.setItem("stateSession", JSON.stringify(session));
     
 
      let timerInterval;  
      Swal.fire({
        title: "Cerrando sesion",
        
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      }).then((result) => {
        
        if (result.dismiss === Swal.DismissReason.timer) {
          Swal.fire({
            title:'Sesión cerrada correctamente',
            icon: 'success'
          })
          navigate("/");
        }
      });
    }
  };




  return (
    <>
      <Navbar bg="white" expand="lg">
        <Container>
          <Navbar.Brand>
          <Link to = "/" className="text-decoration-none p-0">
            <img
              alt="logo RollingVet"
              src="/RollingVet.png"
              width="100"
              height="100"
              className="logo d-inline-block align-center img-responsive"
            />
            
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
          
            {session ? (
              <>
            <Link className="nav-link" to="/planes">
                Planes
              </Link>
              <Link className="nav-link" to="/contactos">
                Contactanos
              </Link>
              <Link className="nav-link" to="/nosotros">
                Sobre nosotros
              </Link>
              <Link className="nav-link" to="/adminhome">
                Administrador
              </Link>
              <Link onClick={handleLogOut}  className="nav-link" to="/turnos/tabla">
                  LogOut
                </Link>
              </>
              ):(
                <>
                <Link className="nav-link" to="/planes">
                Planes
              </Link>
              <Link className="nav-link" to="/contactos">
                Contactanos
              </Link>
              <Link className="nav-link" to="/nosotros">
                Sobre nosotros
              </Link>
              
              <Link
                className=" nav-link outline-dark"
                to="/login"
              >
                LOGIN
              </Link>
              </>
              )  }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  );
};

export default Navigation;
