import React, { useEffect, useState } from 'react'
import { Button, Container, Form, FormGroup } from 'reactstrap';
// import Course from './Course';
import axios from 'axios';
import base_url from '../../API/BootAPI';

function Addcourses() {
    useEffect(() => {
        document.title = "Add Courses";

    }, []);

    const [course, setCourse] = useState({});

    function handleSubmit(e) {
        console.log(course);
        postDatatoServer(course);
        e.preventDefault();

    }

    //Function to podst data server

    const postDatatoServer = (data) => {

        axios.post(`${base_url}/course`, data).then(
            (response) => {
                console.log(response);
                console.log("Success");
            }, (error) => {
                console.log(error);
                console.log("Unsuccess");

            }
        );
    }

    return (
        <div>
            <h1>Fill Details</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <label htmlfor='courseId'>Course Id</label>
                    <input onChange={(e) => {
                        setCourse({ ...course, id: e.target.value })
                    }} style={{ width: "97%" }} type='text' placeholder='Enter Here..' name='courseId' id='courseId' ></input>
                </FormGroup>
                <FormGroup>
                    <label htmlfor='coursetitle'>Course Title</label>
                    <input onChange={(e) => {
                        setCourse({ ...course, title: e.target.value })
                    }} style={{ width: "97%" }} type='text' placeholder='Enter Here..' name='coursetitle' id='coursetitle' ></input>
                </FormGroup>
                <FormGroup>
                    <label htmlfor='coursedecription'>Course Decription</label>
                    <input onChange={(e) => {
                        setCourse({ ...course, description: e.target.value })
                    }} style={{ height: "150px", width: "97%", paddingBottom: '11 0px' }} type='text' placeholder='Enter Here..' name='coursedecription' id='coursedecription' ></input>
                </FormGroup>

                <Container>

                    <Button color='danger me-3' type='reset'>Clear</Button>
                    <Button type='submit' color='success'>Add Course</Button>

                </Container>
            </Form>
        </div>
    )
}
export default Addcourses;