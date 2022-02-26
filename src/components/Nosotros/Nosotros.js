import React from 'react';
import "./Nosotros.css";
import { Container, Row, Col,   } from 'react-bootstrap';


const Nosotros = () => {
    return (
        <div>
            <Container>
            <h1 className="display-2 text-center text-white p-4">Nosotros</h1>
            </Container>
           <Container>
           <h4 className="text-center text-white pb-3 px-1">
          Nuestro amor por el vino se extiende desde los Valles Calchaquies
            hasta la Cordillera de los Andes. <br />
            Queremos llegar a vos a traves de este blog para que tu experiencia
            en cada copa sea unica.
          </h4>
           </Container>
          
          <Container>
              <Row>
                  <Col sm={12} md={4}>
                  <img
              class="opacity img img-fluid rounded-circle"
              src="img..."
              alt="Fotodelourdes"
            />
            <h4 class="text-center colorIndex">Lourdes Kasznar</h4>
                  </Col>
                  <Col sm={12} md={4}>
                  <img
              class="opacity img img-fluid rounded-circle"
              src="img..."
              alt="Fotodenacho"
            />
            <h4 class="text-center colorIndex">Ignacio Vargas</h4>
                  </Col>
                  <Col sm={12} md={4}>
                  <img
              class="opacity img img-fluid rounded-circle"
              src="img..."
              alt="Fotodeluchy"
            />
            <h4 class="text-center colorIndex">Luciana Medina Escaño</h4>
                  </Col>
              </Row>
           </Container>
           <Container>
              <Row>
                  <Col sm={12} md={4}>
                  <img
              class="opacity img img-fluid rounded-circle"
              src="../img/contactos/Nicolas.png"
              alt="Fotodenico"
            />
            <h4 class="text-center colorIndex">Nicolas Cortez D'Elia</h4>
                  </Col>
                  <Col sm={12} md={4}>
                  <img
              class="opacity img img-fluid rounded-circle"
              src="../img/contactos/Bautista.png"
              alt="FotodeJuan"
            />
            <h4 class="text-center ">Juan Pablo Torres</h4>
                  </Col>
                  <Col sm={12} md={4}>
                  <img
              class="opacity img img-fluid rounded-circle"
              src="../img/contactos/Luciano.png"
              alt="Fotodeluciano"
            />
            <h4 class="text-center colorIndex">Luciano Hidalgo</h4>  
                  </Col>
              </Row>
           </Container>     
            </div>
        
    );
};

export default Nosotros;