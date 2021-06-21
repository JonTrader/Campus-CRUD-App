import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import axios from 'axios'

class EditStudent extends Component
{
    constructor()
    {
        super();

        this.state =
        {
            
            student: {},
            match: {
                params : this.props
            }
        }
    }

    async componentDidMount()
    {
        const { match: { params } } = this.props;

        const response = await axios.get(`http://localhost:3010/student:${params.id}`)
        this.setState({campus: response.data})
    }

    render()
    {

        const { match: { params } } = this.props;
        const studEdit = `http://localhost:3010/student:${params.id}/edit`;

        return(
            <Container className="mt-5">
                <div className="text-center mb-5">
                    <h1>Edit Student</h1>
                </div>
                <Row className="justify-content-center">
                    <Col xs={6}>
                        <form action={studEdit} method="PUT">
                            <Form.Group controlId="firstname">
                                <Form.Label>Student's First Name</Form.Label>
                                <Form.Control type="text" placeholder={this.state.student.firstName} name="firstName"/>
                            </Form.Group>

                            <Form.Group controlId="lastname">
                                <Form.Label>Student's Last Name</Form.Label>
                                <Form.Control type="text" placeholder={this.state.student.lastName} name="lastName"/>
                            </Form.Group>

                            <Form.Group controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder={this.state.student.email} name="email"/>
                            </Form.Group>

                            <Form.Group controlId="imageURL">
                                <Form.Label>Image URL</Form.Label>
                                <Form.Control type="text" placeholder={this.state.student.imageUrl} />
                            </Form.Group>

                            <Form.Group controlId="gpa">
                                <Form.Label>GPA</Form.Label>
                                <Form.Control type="number" placeholder={this.state.student.gpa} min="0.0" max="4.0" name="gpa" />
                            </Form.Group>

                            <Form.Group controlId="campusId">
                                <Form.Label>Campus ID</Form.Label>
                                <Form.Control type="number" placeholder={this.state.student.campusId} name="campusId" />
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

export default EditStudent;