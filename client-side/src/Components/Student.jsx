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
            student: ""
        }
    }


    async componentDidMount()
    {
        const { match: { params } } = this.props;
        console.log(params.id)
        const response = await axios.get(`http://localhost:3010/student:${params.id}`)
        console.log(response.data)
        this.setState({student: response.data})
    }


    render()
    {

        const student = this.state.student;
        console.log(student);
        return(
            <Container>
                <Jumbotron className="mt-4">
                    <Row className="align-items-center">
                        <Col className="text-center">
                            <Image src="http://4.bp.blogspot.com/-zsbDeAUd8aY/US7F0ta5d9I/AAAAAAAAEKY/UL2AAhHj6J8/s1600/facebook-default-no-profile-pic.jpg" thumbnail />
                        </Col>
                        <Col>
                            <h2>{`${student.firstName} - ${student.lastName}`}</h2>
                            <p>Email: {student.email}</p>
                            <p>GPA: {student.gpa}</p>
                            <div>
                                <Button variant="warning">Edit</Button>{' '}
                                <Button variant="danger">Delete</Button>{' '}
                            </div>
                        </Col>
                    </Row>
                </Jumbotron>

                <Row className="mt-5 text-center">
                </Row>
            </Container>
        )
    }
}

export default Student;