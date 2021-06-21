import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import axios from 'axios'

class EditCampus extends Component
{
    constructor()
    {
        super();

        this.state =
        {
            campus: {},
            match: {
                params : this.props
            }
        }
    }

    async componentDidMount()
    {
        const { match: { params } } = this.props;
        console.log(params)

        const response = await axios.get(`http://localhost:3010/campus:${params.id}`)
        this.setState({campus: response.data})
    }

    handleSubmit = async (e) =>
    { 
        e.preventDefault();

        const { match: { params } } = this.props;
        const name = document.getElementById("name").value;
        const address = document.getElementById("address").value;
        const imageUrl = document.getElementById("imageUrl").value;
        const description = document.getElementById("description").value;

        const body = { name, address, imageUrl, description };

        const response = await fetch(
            `http://localhost:3010/campus:${params.id}/edit`,
            {
              method: "PUT",
              headers: { 
                  "Content-Type": "application/json" 
                },
              body: JSON.stringify(body)
            }
          );

          window.location = "/";
    }

    render()
    {
        const { match: { params } } = this.props;
        const campEdit = `http://localhost:3010/campus:${params.id}/edit`;
        return(
            <Container className="mt-5">
                <div className="text-center mb-5">
                    <h1>Edit Campus</h1>
                </div>
                <Row className="justify-content-center">
                    <Col xs={6}>
                        <form action = {this.handleSubmit()} method="POST" >
                            <Form.Group controlId="name">
                                <Form.Label>Campus Name</Form.Label>
                                <Form.Control aria-required type="text" placeholder={this.state.campus.name} name="name"ref/>
                            </Form.Group>

                            <Form.Group controlId="address">
                                <Form.Label>Location</Form.Label>
                                <Form.Control type="text" placeholder= {this.state.campus.address} name="address"/>
                            </Form.Group>

                            <Form.Group controlId="imageUrl">
                                <Form.Label>Image Url</Form.Label>
                                <Form.Control type="text" placeholder={this.state.campus.imageUrl} />
                            </Form.Group>

                            <Form.Group controlId="description">
                                <Form.Label>Description</Form.Label>
                                <Form.Control name = "description" placeholder={this.state.campus.description} as="textarea"  rows={3} />
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

export default EditCampus;