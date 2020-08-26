import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import styles from '../css/NavBar.module.css'


const AppNavbar = () => {

  return (
    <Navbar bg="dark" expand="lg" className={styles.Header}>
      <Navbar.Brand href="/" className="text-white mr-auto">Hakuna Matata</Navbar.Brand>
      <Nav className={styles.NavBarButtons}>
        <LinkContainer to="/dashboard">
          <Nav.Link className="text-white">Dashboard</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar>   
  )
}

export default AppNavbar;