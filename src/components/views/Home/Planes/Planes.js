import React from 'react';
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const Planes = () => {
    return (
      
        <Container >
      <Row>
        <Col sm={12} md={4} className="mb-2">
          <Card className="text-center shadow">
            <Card.Body>
            <Card.Img
              variant="top"
              src="https://media.istockphoto.com/photos/cute-cat-sleeping-and-relaxed-snuggling-on-the-bed-animal-friendly-picture-id1219352486?k=20&m=1219352486&s=612x612&w=0&h=l1C4u64mkhkC2wUfSvS1QitJqhwug2S8ACfJKaL1o-Y="
              alt='gatito tierno de Primeros pasos'
            />
              <Card.Title className='mt-2'>Plan Primeros Pasos</Card.Title>
              <Card.Text>
                Servicios para mascotas de 0 a 5 años.
              </Card.Text>
              <Link to="/planes/primerospasos"> <Button variant="danger" className="color-navbar rounded-pill">Contratar</Button></Link>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4} className="mb-2">
          <Card className="text-center shadow">
            <Card.Body>
            <Card.Img
              variant="top"
              src="https://media.istockphoto.com/photos/happy-dog-running-and-having-fun-picture-id654620372?k=20&m=654620372&s=612x612&w=0&h=ukkojV4c3xI-exarS63LC5mnAPHdjypcicX-SNY9xfU="
              alt='perro mirando al frente del Plan Madurando'
            />
              <Card.Title className='mt-2'>Plan Madurando</Card.Title>
              <Card.Text>
                Servicios para mascotas de 5 a 10 años.
              </Card.Text>
              <Link to="/planes/madurando"> <Button variant="danger" className="color-navbar rounded-pill">Contratar</Button></Link>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4}>
          <Card className="text-center shadow">
            
            <Card.Body>
            <Card.Img
              variant="top"
              src="https://media.istockphoto.com/photos/dog-golden-retriever-picture-id1287445691?k=20&m=1287445691&s=612x612&w=0&h=NMAx1FBqf0dh0EZtlf7Zf8M0EKLVyanBEk0wwG128-A="
              alt='perro con pelaje canoso del Plan Adultos'
            />
              <Card.Title className='mt-2'>Plan Adultos</Card.Title>
              <Card.Text>
                Servicios para mascotas de más de 10 años.
              </Card.Text>
              <Link to="/planes/adultos"> <Button variant="danger" className="color-navbar rounded-pill">Contratar</Button></Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    
    );
};

export default Planes;