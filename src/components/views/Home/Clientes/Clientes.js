import React from 'react';
import {
    Col,
    Container,
    Row,
    Card,
    ListGroup,
    ListGroupItem,
    Image
  } from "react-bootstrap";

const Clientes = () => {
    return (
        <div>
              <Card border="light" style={{ width: '18rem' }}>
    
    <Card.Img 
    
              variant="top"
              src="https://images.squarespace-cdn.com/content/v1/53aa5722e4b0ada1a70119f2/1529694594561-7ERUUT9270RZI2R946J1/CORP20180521-Freeman+%284+of+6%29-Edit.jpg?format=2500w"
              className='roundedCircle'/>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
  </Card>
        </div>
    );
};

export default Clientes;