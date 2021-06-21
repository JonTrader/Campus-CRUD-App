import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom';

class navbar extends Component
{
    render()
    {
        return(
            <Navbar bg="dark" variant="dark" expand="md" className="pl-5 pr-5">
                <Navbar.Brand href="" >School System of HardKnocks</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link to="/" className="nav-link">Home</Link> {/* Add color change on hover (border or text)*/}
                        <Link to="/allCampuses" className="nav-link">Campuses</Link>
                        <Link to="/allStudents" className="nav-link">Students</Link>                       
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default navbar;