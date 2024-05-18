import React from "react";
import { Navbar, Nav, Container, NavDropdown, Form, Button } from "react-bootstrap";
import './Navs.css'

const Navbarpage = () => {
  return (
    <>
      <Navbar expand="lg" className="">
        <Container fluid>
          <Navbar.Brand href="#">Yellow Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0 " style={{ maxHeight: '100px' }} navbarScroll>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#product">products</Nav.Link>
              <Nav.Link href="#about">about</Nav.Link>
              <Nav.Link href="#contact">contact</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Button className="custom-button" variant="outline-warning">LOGIN</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbarpage;
