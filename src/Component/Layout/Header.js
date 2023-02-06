import React from "react";

import { Container, Navbar  } from 'react-bootstrap';
import {Cart} from '../Cart/Card'

export const Header = () => {
    return (
    <div>
    <div className="fixed-top">
    <Navbar bg="dark"  variant="dark">
    <Container className="justify-content-center"    >
      <Navbar.Brand >Home</Navbar.Brand>
      <Navbar.Brand href="#store">Store</Navbar.Brand>
      <Navbar.Brand >About</Navbar.Brand>
      </Container>
      <Cart />
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

