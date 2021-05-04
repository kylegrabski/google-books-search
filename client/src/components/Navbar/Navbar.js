import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavHeader() {
  return (
    <Navbar fixed="top" bg="dark" variant="dark">
      <Navbar.Brand >Google Books Search</Navbar.Brand>
      <Nav className="mr-auto">
        {/* @ToDO change these href's to router links */}
        <Link to="/">Home</Link>
        <Link to="saved-books">Saved Books</Link>
      </Nav>
    </Navbar>
  );
}

export default NavHeader;
