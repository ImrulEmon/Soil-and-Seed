import React, { Component } from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";

class NavbarComp extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" expand="lg" variant="dark">
          <Container fluid>
            <Navbar.Brand href="home">
              <img
                src="./cropped-favicon.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
               Soil & Seed
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto mx-lg-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/services">Services</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="#">Custom</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2 text-center"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default NavbarComp;
