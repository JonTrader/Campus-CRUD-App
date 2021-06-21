import React, { Component } from 'react'
import './Styling/Card.css'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import StudentCard from './StudentCard'
import { Link } from 'react-router-dom';
import axios from 'axios'

class SingleCampus extends Component
{

    constructor()
    {
        super();

        this.state =
        {
            campus: {},

            students: [],
            match:
            {
                params : this.props
            }
        }
    }


    async componentDidMount()
    {
        const { match: { params } } = this.props;

        const response = await axios.get(`http://localhost:3010/campus:${params.id}`)
        const responseStudents = await axios.get(`http://localhost:3010/campus:${params.id}/students`)
        this.setState({campus: response.data})
        this.setState({students: responseStudents.data})
        console.log(this.state.students)
    }


    students = () =>
    {
        let studentValues = this.state.students;
        if (studentValues.length !== 0)
        {
            return studentValues.map(student => <StudentCard id={student.id} key={student.id} fname={student.firstName} lname={student.lastName} gpa={student.gpa}/>)
        }
        else
        {
            return (
                <div className="text-center mt-5">
                    <h4>No Students Belong To This Campus</h4>
                </div>
            )
        }
    }

    delete= (id) =>
    {
        

        // axios.delete(`http://localhost:3010/campus:${id}/delete`)
        // console.log(`campus ${id} has been deleted`);

        axios({
            method: 'delete',
            url: `http://localhost:3010/campus:${id}/delete`,
            
          });

    }


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
                            <div className="text-center">
                                <h2>{this.state.campus.name}</h2>
                            </div>
                            <p>{this.state.campus.description}</p>
                        </Col>
                    </Row>
                    <Row className="align-items-center text-center">
                        <Col className="pt-2">
                            <h6>{this.state.campus.address}</h6>
                        </Col>
                        <Col>
                        <Link to={`/edit/campus:${this.state.campus.id}`}><Button variant="warning">Edit</Button>{' '}</Link>
                            <Button variant="danger" onClick={this.delete(this.props.id)}>Delete</Button>{' '}
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

                <Row className="mt-5">
                    <this.students />   
                </Row>
            </Container>
        )
    }
}

export default SingleCampus;