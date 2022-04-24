import React, { Component } from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import './NavbarComp.css';
class NavbarComp extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
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
                <NavLink className='nav-style mx-lg-3' to="/home">Home</NavLink>
                <NavLink className='nav-style mx-lg-3' to="/services">Services</NavLink>
                <NavLink className='nav-style mx-lg-3' to="/about">About</NavLink>
                <NavLink className='nav-style mx-lg-3' to="#">Custom</NavLink>
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
