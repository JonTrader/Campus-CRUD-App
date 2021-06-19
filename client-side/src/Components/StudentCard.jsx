import React, { Component } from 'react';
import './Styling/Card.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'


class StudentCard extends Component
{
    render()
    {
        return (
            <Col xs={12} sm={6} lg={4} xl={3} className="mb-4">
                <Card style={{ width: '16rem' }} className="middle">
                    <Card.Img thumbnail="true" variant="top" src="http://4.bp.blogspot.com/-zsbDeAUd8aY/US7F0ta5d9I/AAAAAAAAEKY/UL2AAhHj6J8/s1600/facebook-default-no-profile-pic.jpg" />
                    <Card.Body>
                        <Card.Title>{this.props.fname} {this.props.lname}</Card.Title>
                        <Card.Text>
                            GPA: {this.props.gpa}
                        </Card.Text>

                        <a href="https://www.google.com"><Button variant="info">View</Button></a>
                    </Card.Body>
                </Card>
            </Col>
        )
    }
}

export default StudentCard;