import React, { Component } from 'react';
import './Styling/Card.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class CampusCard extends Component
{
    render()
    {
        return (
            <Col xs={12} md={6} xl={4} className="mb-4">
                <Card style={{ width: '20rem' }} className="middle">
                    <Card.Img thumbnail variant="top" src="https://images.unsplash.com/photo-1603573355706-3f15d98cf100?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtcHVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" />
                    <Card.Body>
                        <Card.Title>Campus Name</Card.Title>
                        <Card.Text>
                            Students: (numStudents)
                        </Card.Text>

                        <Card.Text>
                            Description (maybe)
                        </Card.Text>
                        <Row>

                            <Col className="text-center">
                                <a href="https://www.google.com"><Button variant="info">View</Button></a>
                            </Col> 

                            <Col className="text-center">
                                <Button variant="warning">Edit</Button>
                            </Col>

                            <Col className="text-center">
                                <a href="https://www.google.com"><Button variant="danger">Delete</Button></a>
                            </Col> 
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        )
    }
}

export default CampusCard;