import React, { Component } from 'react';
import {Container,Nav,Navbar,NavDropdown} from 'react-bootstrap';


function NavbarComp() {
  return (
    <Navbar bg="dark" variant= 'dark'expand="lg">
      <Container>
        <Navbar.Brand href="#home">Soufo-Space</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About Us</Nav.Link>
            <NavDropdown title="Products" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Tea</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Coffee
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Hot Chocolate</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Water
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComp