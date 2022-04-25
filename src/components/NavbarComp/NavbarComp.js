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
import "./NavbarComp.css";
class NavbarComp extends Component {
  render() {
    return (
      <div className="my-8">
        <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
          <Container fluid>
          <Navbar.Brand href="home">
              <img
                src="./cropped-favicon.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="Soil and Seed"
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
                <NavLink
                  className="nav-style mx-lg-3"
                  to="/home"
                  style={({ isActive }) =>
                    isActive
                      ? {
                          color: "#fff",
                          background: "#7600dc",
                          borderRadius: "5px",
                          fontWeight: "bold",
                        }
                      : { color: "white" }
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  className="nav-style mx-lg-3"
                  to="/services"
                  style={({ isActive }) =>
                    isActive
                      ? {
                          color: "#fff",
                          background: "#7600dc",
                          borderRadius: "5px",
                          fontWeight: "bold",
                        }
                      : { color: "white" }
                  }
                >
                  Services
                </NavLink>
                <NavLink
                  className="nav-style mx-lg-3"
                  to="/about"
                  style={({ isActive }) =>
                    isActive
                      ? {
                          color: "#fff",
                          background: "#7600dc",
                          borderRadius: "5px",
                          fontWeight: "bold",
                        }
                      : { color: "white" }
                  }
                >
                  About
                </NavLink>
                <NavLink
                  to=""
                  className="nav-style mx-lg-3"
                  to="#"
                  style={({ isActive }) =>
                    isActive
                      ? {
                          color: "#fff",
                          background: "#7600dc",
                          borderRadius: "5px",
                          fontWeight: "bold",
                        }
                      : { color: "white" }
                  }
                >
                  Custom
                </NavLink>
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
