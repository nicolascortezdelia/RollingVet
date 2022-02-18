import React from "react";
import {
  Col,
  Container,
  Row,
  Card,
  
  
} from "react-bootstrap";


const Staff = () => {
  return (
    
    <Container className="mb-3">
      <Row className="d-flex justify-content-around">
        <Col sm={12} md={3} className="d-flex justify-content-center mb-4 ">
        <Card border="light" style={{ width: "18rem", height: "35rem" }} className="shadow">
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/6234609/pexels-photo-6234609.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
            <Card.Body>
              <Card.Title className="text-center text-danger fw-bold">Dra Liza Morgan </Card.Title>
              <Card.Text className="text-center">
                Más de 5 años de experiencia en oncología.
  
                
              </Card.Text>
              
            </Card.Body>

          </Card>
          
        </Col>
       
       

        <Col sm={12} md={3} className="d-flex justify-content-center mb-4 ">
        <Card border="light" style={{ width: "18rem", height: "35rem" }} className="shadow">
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/6234616/pexels-photo-6234616.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
            <Card.Body>
              <Card.Title className="text-center text-danger fw-bold">Dr Andrián Muñoz</Card.Title>
              <Card.Text className="text-center">
              6 años de experiencia en cirugía canina. 
              </Card.Text>
              
            </Card.Body>

          </Card>
          
         
        </Col>
        <Col sm={12} md={3} className="d-flex justify-content-center mb-4 ">
        <Card style={{ width: "18rem", height: "35rem" }} className="shadow roundedCircle">
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/6235666/pexels-photo-6235666.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
            <Card.Body>
              <Card.Title className="text-center text-danger fw-bold">Dr Rolando Schiavi </Card.Title>
             
              <Card.Text className="text-center">
               <b> Fundador de RollingVet </b>
                Actualmente dedicado a la investigación
              </Card.Text>
              
            </Card.Body>

          </Card>
          
         
          
        </Col>
      
        {/*<Col sm={12} md={6} className="bg-light">
          <h2>expertos profesionales</h2>
         <h4>Apostamos por la formación continua, comprometidos por mejorar cada día la atención veterinaria y el cuidado en cada detalle de la salud de las mascotas.</h4>
        </Col>*/}
        
       
      </Row>
    </Container>
    
  );
};

export default Staff;
