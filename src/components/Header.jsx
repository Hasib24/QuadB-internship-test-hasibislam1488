import React from 'react';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <Navbar bg="light" expand="lg">
              <Container>
                <Navbar.Brand href="/">QuadB</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <NavLink className='nav-link'>Home</NavLink>
                    <NavLink className='nav-link'>About</NavLink>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
        </header>
    );
};

export default Header;