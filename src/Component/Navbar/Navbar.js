

import React from "react";
import { Button, Container, NavDropdown, Nav, Navbar } from 'react-bootstrap';
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import logo from '../../assest/Logo.png'
import './navbar.css'
import { Link } from "react-router-dom";


const Navigation = () => {
    return (
        <section style={{ padding: "0% 4%" }}>
            <Navbar collapseOnSelect expand="lg" className="navbar">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" style={{ justifyContent: 'center' }} >
                        <Navbar>
                            <Nav.Link className="link"  href="/">HOME  </Nav.Link>
                            <Nav.Link className="link" href="AboutUs">ABOUT</Nav.Link>
                            <Nav.Link className="link" href="Services" >SERVICES</Nav.Link>
                            <Nav.Link className="link" href="rooms">ROOMS </Nav.Link>
                            <Nav.Link className="link" href="contact">CONTACTS </Nav.Link>
                        </Navbar>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <hr style={{ color: "#c1c1c1" }}></hr>
        </section>
    );
}

export default Navigation;



