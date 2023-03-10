import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import img1 from '../images/logo.png';

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <span> <img className="img-logo" src={img1} ></img> </span>
        <Navbar.Brand as={Link} to="/">
          E-commerce
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/purchases">
              Purchases
            </Nav.Link>
            <Button variant="outline-danger">shopping cart</Button>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
