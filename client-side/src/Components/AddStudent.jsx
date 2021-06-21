import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class AddStudent extends Component
{
    render()
    {

        

        return(
            <Container className="mt-5">
                <div className="text-center mb-5">
                    <h1>Add Student</h1>
                </div>
                <Row className="justify-content-center">
                    <Col xs={6}>
                        <form action="http://localhost:3010/student/submit-data" method="POST">
                            <Form.Group controlId="firstname">
                                <Form.Label>Student's First Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter First Name" name="firstName"/>
                            </Form.Group>

                            <Form.Group controlId="lastname">
                                <Form.Label>Student's Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Last Name" name="lastName"/>
                            </Form.Group>

                            <Form.Group controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter Email" name="email"/>
                            </Form.Group>

                            <Form.Group controlId="imageURL">
                                <Form.Label>Image URL</Form.Label>
                                <Form.Control type="text" placeholder="Enter Image URL" />
                            </Form.Group>

                            <Form.Group controlId="gpa">
                                <Form.Label>GPA</Form.Label>
                                <Form.Control type="number" placeholder="Enter GPA" min="0.0" max="4.0" step="0.01" name="gpa" />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default AddStudent;