import React, { Component } from 'react'
import './Styling/Card.css'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import axios from 'axios';

class Student extends Component
{

    constructor()
    {
        super();

        this.state =
        {
            student: {}
        }
    }


    async componentDidMount()
    {
        const { match: { params } } = this.props;
        console.log(params.id)
        const response = await axios.get(`http://localhost:3010/student:${params.id}`)
        console.log(this.response)
    }


    render()
    {
        return(
            <Container>
                <Jumbotron className="mt-4">
                    <Row className="align-items-center">
                        <Col className="text-center">
                            <Image src="http://4.bp.blogspot.com/-zsbDeAUd8aY/US7F0ta5d9I/AAAAAAAAEKY/UL2AAhHj6J8/s1600/facebook-default-no-profile-pic.jpg" thumbnail />
                        </Col>
                        <Col>
                            <h2>{} {}</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident deserunt molestias illo voluptatum, quis eaque consequatur eum nulla porro, eligendi placeat perferendis voluptas sequi consequuntur rem in harum aperiam vel!</p>
                            <div className="text-center">
                                <Button variant="warning">Edit</Button>{' '}
                                <Button variant="danger">Delete</Button>{' '}
                            </div>
                        </Col>
                    </Row>
                </Jumbotron>

                <Row className="mt-5 text-center">
                    <Col>
                        <h4>Students on Campus</h4>
                    </Col>

                    <Col>
                        <Button>Add Students</Button>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Student;