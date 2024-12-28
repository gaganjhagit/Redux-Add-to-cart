import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { FaCartPlus } from 'react-icons/fa';

import { useSelector } from 'react-redux';

function Header() {

    const aditya = useSelector((state)=>state)  //if you have used multiple slices in store you have to access key of that slice to acccess slice data
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>      
          </Nav>
          <Nav>
          <Nav.Link as={Link} to="cart">
            
          {aditya.length}
            <FaCartPlus/>
            </Nav.Link>      

          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;