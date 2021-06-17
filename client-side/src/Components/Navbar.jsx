import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

class navbar extends Component
{
    render()
    {
        return(
            <Navbar bg="dark" variant="dark" expand="md" className="pl-5 pr-5">
                <Navbar.Brand href="#home">Project 1 (Placeholder)</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#students">Home</Nav.Link> {/* Add color change on hover (border or text)*/}
                        <Nav.Link href="#campuses">Campuses</Nav.Link>
                        <Nav.Link href="#students">Students</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default navbar;