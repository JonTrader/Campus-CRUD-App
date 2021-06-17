import React, { Component } from 'react';
import './Styling/Card.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class StudentCard extends Component
{
    render()
    {
        return (
            <Card style={{ width: '16rem' }}>
                <Card.Img thumbnail variant="top" src="http://4.bp.blogspot.com/-zsbDeAUd8aY/US7F0ta5d9I/AAAAAAAAEKY/UL2AAhHj6J8/s1600/facebook-default-no-profile-pic.jpg" />
                <Card.Body>
                    <Card.Title>Student Name</Card.Title>
                    <Card.Text>
                        Campus Name
                    </Card.Text>

                    <Row>

                        <Col className="text-center">
                            <a href="https://www.google.com"><Button variant="info">View</Button></a>
                        </Col> 

                        <Col className="text-center">
                            <a href="https://www.google.com"><Button variant="danger">Delete</Button></a>
                        </Col> 
                    </Row>
                </Card.Body>
            </Card>
        )
    }
}

export default StudentCard;