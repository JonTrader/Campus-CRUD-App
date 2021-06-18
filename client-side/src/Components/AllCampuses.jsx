import React, { Component } from 'react'
import Navbar from './Navbar'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CampusCard from './CampusCard'

class Campus extends Component
{
    render()
    {
        return(

            <>
                <Navbar />
                    <Container>
                        <Jumbotron className="mt-4 text-center">

                            <Row className="align-items-center">
                                <Col><h1>Campuses</h1></Col>
                                <Col><h4>Add Campus</h4></Col>
                            </Row>

                            <Row className="align-items-center">
                                <Col><h6>Currently Displaying: num Campuses</h6></Col>
                                <Col><Button variant="success">Add</Button></Col>
                            </Row>

                        </Jumbotron>

                        <Row>
                            <CampusCard />
                            <CampusCard />
                            <CampusCard />
                            <CampusCard />
                            <CampusCard />
                            <CampusCard />
                            <CampusCard />
                            <CampusCard />
                            <CampusCard />
                            <CampusCard />
                        </Row>
                    </Container>
            </>
            
        )
    }
}

export default Campus;