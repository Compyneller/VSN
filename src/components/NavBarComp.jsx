import React from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";
import logo from "../assets/oie_YRqpB70c5Sbm.png";

const NavBarComp = () => {
  return (
    <Navbar
      bg="light"
      expand="lg"
      style={{ position: "sticky", top: "0", zIndex: "1000" }}
    >
      <Container style={{ padding: "1rem " }}>
        <Navbar.Brand href="/">
          <h3>VSN Solutions</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex justify-content-between align-items-center  w-50">
            <Link to="/" onClick={() => window.scroll(0, 0)}>
              Home
            </Link>
            <Link to="/aboutUs" onClick={() => window.scroll(0, 0)}>
              About Us
            </Link>
            <Link to="/career" onClick={() => window.scroll(0, 0)}>
              Career
            </Link>
            <Link to="/pricing" onClick={() => window.scroll(0, 0)}>
              Pricing
            </Link>
            <Button variant="dark">Login</Button>
            <Button variant="dark">Signup</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarComp;
