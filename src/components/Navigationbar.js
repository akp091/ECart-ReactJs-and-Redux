import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navigationbar() {
  const cartItems=useSelector((state)=>state.cart);
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">EComm</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {/* <Link to='/'> <NavItem>Products</NavItem> </Link> */}
            <Link className="nav-link " to="/">
                  Products
                </Link>
          </Nav>
          <Link to='/bill'><Button variant="outline-primary">Bill and Payment </Button> </Link>
          <Link to='/cart'><Button variant="outline-success">Cart {cartItems.length}</Button> </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;
