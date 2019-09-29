import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "@reach/router";

interface Props {

}

const NavLink = (props: any) => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      // the object returned here is passed to the
      // anchor element's props
      return {
        className: `${props.className} ${isCurrent && "active"}`
      };
    }}
  />
);

const HomeNav = (props: Props) => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">Litvan collective studio</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav defaultActiveKey="/" className="mr-auto">
        <NavLink className={"nav-link"} to="/">Gql from request</NavLink>
        <NavLink className={"nav-link"} to="/cron">Cron</NavLink>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default HomeNav;
