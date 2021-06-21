import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import StudentCard from './StudentCard'
import { Link } from 'react-router-dom';
import axios from 'axios';

class AllStudents extends Component

{

    constructor()
    {
        super();

        this.state =
        {
            allStudents: []
        }
    }

    async componentDidMount()
    {
        try
        {
            const studentsValues = await axios("http://localhost:3010/student/all")
            this.setState({allStudents: studentsValues.data})
            console.log(this.state.allCampuses);
        }
        catch (error)
        {
            console.log(error);
        }
        
    }

    students = () =>
    {


        let allStudents = this.state.allStudents;
        console.log(allStudents)
        if (allStudents.length !== 0)

        {
            return allStudents.map(student => (<StudentCard key={student.id} fname={student.firstName} lname={student.lastName} gpa={student.gpa} />))
        }
        else
        {
            return <h1>None</h1>
        }
    }





    render()
    {
        let forLength = this.state.allStudents;

        return(
            <Container>
                <Jumbotron className="mt-4 text-center">

                    <Row className="align-items-center">
                        <Col><h1>Students</h1></Col>
                        <Col><h4>Add Student</h4></Col>
                    </Row>

                    <Row className="align-items-center">
                        <Col><h6>Currently Displaying: {forLength.length} Students</h6></Col>
                        <Col>
                            <Link to="/addStudent" className="nav-link">
                                <Button variant="success">Add</Button>
                            </Link>
                        </Col>
                    </Row>

                </Jumbotron>

                <Row>
                    <this.students />
                </Row>
            </Container>
        )
    }
}

export default AllStudents;