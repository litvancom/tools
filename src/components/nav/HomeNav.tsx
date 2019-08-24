import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "@reach/router";

interface Props {

}

const HomeNav = (props: Props) => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">Litvan collective studio</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link><Link to="/">Gql from request</Link></Nav.Link>
        <Nav.Link><Link to="/link">Link</Link></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default HomeNav;
