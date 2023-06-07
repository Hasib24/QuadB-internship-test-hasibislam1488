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
                    <NavLink to={'/'} className='nav-link'>Shows</NavLink>
                    <NavLink className='nav-link'>My Bookings</NavLink>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
        </header>
    );
};

export default Header;