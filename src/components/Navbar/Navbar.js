import React from 'react';
import { Nav, Navbar as NavBootstrap, Button } from 'react-bootstrap';
import CreateButton from './CreateButton';

const Navbar = () => {
  return (
    <NavBootstrap collapseOnSelect expand="md" bg="dark" variant="dark">
      <NavBootstrap.Brand href="/">Alkemy Labs</NavBootstrap.Brand>
      <NavBootstrap.Toggle aria-controls="responsive-navbar-nav" />
      <NavBootstrap.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Button variant="info" className="m-1" href="/">
            Home
          </Button>
          <CreateButton />
        </Nav>
      </NavBootstrap.Collapse>
    </NavBootstrap>
  );
};

export default Navbar;
