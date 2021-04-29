import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function NavHeader() {
  return (
    <Navbar fixed="top" bg="primary" variant="dark">
      <Navbar.Brand href="#home">Google Books Search</Navbar.Brand>
      <Nav className="mr-auto">
        {/* @ToDO change these href's to router links */}
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Saved Books</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NavHeader;
