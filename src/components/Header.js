import React from 'react';
import {Navbar, Form, Button, Nav } from "react-bootstrap";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = ({decrement, countProductAdd, handleShow}) => {
    return(
        <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">Shop</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home"></Nav.Link>
          <Nav.Link href="#features"></Nav.Link>
          <Nav.Link href="#pricing"></Nav.Link>
        </Nav>
        <Form inline>
          <Button variant=""  onClick = {handleShow}>
    🔔 <span class="badge badge-danger" name="notif" >{countProductAdd}</span></Button>
        </Form>
      </Navbar>

    )
} 
export default Header;
