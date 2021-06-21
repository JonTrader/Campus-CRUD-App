import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class AddCampus  extends Component
{


    render()
    {
        return(
            <Container className="mt-5">
                <div className="text-center mb-5">
                    <h1>Add Campus</h1>
                </div>
                <Row className="justify-content-center">
                    <Col xs={6}>
                        <form action="http://localhost:3010/campus/submit-data" method="POST" >
                            <Form.Group controlId="name">
                                <Form.Label>Campus Name</Form.Label>
                                <Form.Control aria-required type="text" placeholder="Enter Campus Name" name="name"ref/>
                            </Form.Group>

                            <Form.Group controlId="address">
                                <Form.Label>Location</Form.Label>
                                <Form.Control type="text" placeholder="Enter Location" name="address"/>
                            </Form.Group>

                            <Form.Group controlId="imageUrl">
                                <Form.Label>Image Url</Form.Label>
                                <Form.Control type="text" placeholder="Enter Image Url" />
                            </Form.Group>

                            <Form.Group controlId="description">
                                <Form.Label>Description</Form.Label>
                                <Form.Control name = "description" as="textarea" rows={3} />
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

export default AddCampus;