import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavHeader() {
  return (
    <Navbar fixed="top" bg="dark" variant="dark">
      <Navbar.Brand >Google Books Search</Navbar.Brand>
      <Nav className="mr-auto">
        {/* @ToDO change these href's to router links */}
        <Link to="/" style={{color:"white", padding:"5px", marginLeft:"5px"}}>Home</Link>
        <Link to="saved-books" style={{color:"white", padding:"5px", marginLeft:"5px"}}>Saved Books</Link>
      </Nav>
    </Navbar>
  );
}

export default NavHeader;
