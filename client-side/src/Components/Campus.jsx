import React, { Component } from 'react'
import './Styling/Card.css'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import StudentCard from './StudentCard'

class SingleCampus extends Component
{
    render()
    {
        return(
            <Container>
                <Jumbotron className="mt-4">
                    <Row className="align-items-center">
                        <Col className="text-center">
                            <Image src="https://images.unsplash.com/photo-1603573355706-3f15d98cf100?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtcHVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" rounded />
                        </Col>
                        <Col>
                            <h2>Campus Name</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident deserunt molestias illo voluptatum, quis eaque consequatur eum nulla porro, eligendi placeat perferendis voluptas sequi consequuntur rem in harum aperiam vel!</p>
                        </Col>
                    </Row>
                    <Row className="align-items-center text-center">
                        <Col className="pt-2">
                            <h6>Address1:</h6>
                            <h6>Address1:</h6>
                        </Col>
                        <Col>
                            <Button variant="warning">Edit</Button>{' '}
                            <Button variant="danger">Delete</Button>{' '}
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

                <Row className="mt-3">
                    <StudentCard w="12"/> {/* Testing Purposes*/}
                    <StudentCard w="12"/> {/* Testing Purposes*/}
                    <StudentCard w="12"/> {/* Testing Purposes*/}
                    <StudentCard w="12"/> {/* Testing Purposes*/}
                    <StudentCard w="12"/> {/* Testing Purposes*/}
                    <StudentCard w="12"/> {/* Testing Purposes*/}
                    <StudentCard w="12"/> {/* Testing Purposes*/}
                    <StudentCard w="12"/> {/* Testing Purposes*/}
                    <StudentCard w="12"/> {/* Testing Purposes*/}
                    <StudentCard w="12"/> {/* Testing Purposes*/}
                    <StudentCard w="12"/> {/* Testing Purposes*/}
                    <StudentCard w="12"/> {/* Testing Purposes*/}
                    <StudentCard w="12"/> {/* Testing Purposes*/}
                    <StudentCard w="12"/> {/* Testing Purposes*/}
                    <StudentCard w="12"/> {/* Testing Purposes*/}
                    <StudentCard w="12"/> {/* Testing Purposes*/}
                    <StudentCard w="12"/> {/* Testing Purposes*/}
                    <StudentCard w="12"/> {/* Testing Purposes*/}
                    <StudentCard w="12"/> {/* Testing Purposes*/}
                    <StudentCard w="12"/> {/* Testing Purposes*/}
                    <StudentCard w="12"/> {/* Testing Purposes*/}
                    <StudentCard w="12"/> {/* Testing Purposes*/}
                    <StudentCard w="12"/> {/* Testing Purposes*/}
                    <StudentCard w="12"/> {/* Testing Purposes*/}
                    <StudentCard w="12"/> {/* Testing Purposes*/}
                    <StudentCard w="12"/> {/* Testing Purposes*/}
                    <StudentCard w="12"/> {/* Testing Purposes*/}
                    <StudentCard w="12"/> {/* Testing Purposes*/}
                    <StudentCard w="12"/> {/* Testing Purposes*/}
                    <StudentCard w="12"/> {/* Testing Purposes*/}
                    
                </Row>
            </Container>
        )
    }
}

export default SingleCampus;