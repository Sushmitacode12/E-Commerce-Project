import React from "react";

import { Container, Navbar,  Button } from 'react-bootstrap';


const Navigation = () => {
    return (
    <div>
      <div className="fixed-top">
    <Navbar bg="dark"  variant='dark'>
    <Container className="justify-content-center me-7  fixed" style={{ fontFamily: "Serif" }} >
      <Navbar.Brand href="#home">Home</Navbar.Brand>
      <Navbar.Brand href="#store">Store</Navbar.Brand>
      <Navbar.Brand href="#about">About</Navbar.Brand>
      </Container>
      <Button className="justify-content-end me-4 btn btn-dark btn-outline-info text-white">Cart</Button>{' '}
    </Navbar>
    </div>

    <div className="mt-5">
      <Navbar className="text-white bg-secondary" expand="md">
        <Container className="justify-content-centre">
          <p className="display-1">The Generics</p>
        </Container>
      </Navbar>
    </div>
    </div> 
    );
}

export default Navigation;