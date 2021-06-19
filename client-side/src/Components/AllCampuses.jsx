import React, { Component } from 'react'
import Navbar from './Navbar'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CampusCard from './CampusCard'
import axios from 'axios';

class Campus extends Component
{

    constructor()
    {
        super();

        this.state =
        {
            allCampuses: []
        }
    }

    async componentDidMount()
    {
        try
        {
            const campusesValue = await axios("http://localhost:5000/allCampuses")
            this.setState({allCampuses: campusesValue.data})
            console.log(this.state.allCampuses);
        }
        catch (error)
        {
            console.log(error);
        }
        
    }

    campuses= () =>
    {

        let allCampuses = this.state.allCampuses;
        if (allCampuses.length !== 0)
        {
            return allCampuses.map(campus => (<CampusCard key={campus.id} title={campus.name} description={campus.description} />))
        }
        else
        {
            return <h1>None</h1>
        }
    }



    render()
    {
        return(
                <Container>
                    <Jumbotron className="mt-4 text-center">

                        <Row className="align-items-center">
                            <Col><h1>Campuses</h1></Col>
                        <Col><h4>Add Campus</h4></Col>
                        </Row>

                        <Row className="align-items-center">
                                <Col><h6>Currently Displaying: num Campuses</h6></Col>
                                <Col><Button variant="success">Add</Button></Col>
                        </Row>

                    </Jumbotron>

                    <Row>
                        <this.campuses />
                    </Row>
                </Container>
            
        )
    }
}

export default Campus;