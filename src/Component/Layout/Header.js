import { Container, Navbar  } from 'react-bootstrap';
import {Cart} from '../Cart/Card'
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div>
    <div className="fixed-top">
    <Navbar bg="dark"  variant="dark">
    <Container className="justify-content-center"    >
      <NavLink to="/Home" style={{ textDecoration: 'inherit', color :"white" }}>Home</NavLink>
      <NavLink to="/Store" style={{ textDecoration: 'inherit', color :"white" }} className="me-5 ms-5">Store</NavLink>
      <NavLink to="/About" style={{ textDecoration: 'inherit', color : 'white',marginRight:"20px" }} className="me-5">About</NavLink>
      <NavLink to="/Login" style={{ textDecoration: 'inherit', color : 'white',marginRight:"20px" }} className="me-5">Login</NavLink> 
      <NavLink to="/ContactUs" style={{ textDecoration: 'inherit', color : 'white',marginRight:"20px" }} >Contact-Us</NavLink>
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
};

