import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";


const AppNavbar = () => {

  return (
    <Navbar bg="dark" expand="lg">
      <Navbar.Brand href="/" className="text-white mr-auto">Hakuna Matata</Navbar.Brand>
      <Nav>
        <LinkContainer to="#">
          <Nav.Link className="text-white">About</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/dashboard">
          <Nav.Link className="text-white">Dashboard</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar>   
  )
}

export default AppNavbar;