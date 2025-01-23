// import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from "../assets/icons/logo.png";

const NavigationBar = () => {
  return (
    <Navbar bg="black" variant="dark" expand="lg" sticky="top">

      <Navbar.Brand href="/">
        <img
          src={logo} 
          width="60"
          height="60"
          className="d-inline-block align-top"
          alt="NiceDent logo"
        />{' '}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/product">Product</Nav.Link>
          <Nav.Link href="/contact">Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;

