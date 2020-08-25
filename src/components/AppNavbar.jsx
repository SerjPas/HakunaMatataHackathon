import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";


const AppNavbar = () => {

  return (
    <Navbar bg="dark" expand="lg">
      <Navbar.Brand href="/" className="text-white mr-auto">Hakuna Matata</Navbar.Brand>
      <Nav>
        <LinkContainer to="/student/add">
          <Nav.Link className="text-white">About</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/signup">
          <Nav.Link className="text-white">Dashboard</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar>   
  )
}

export default AppNavbar;