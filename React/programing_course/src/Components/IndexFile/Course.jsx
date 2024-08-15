import React from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardFooter, Button, Container } from "reactstrap";
import base_url from '../../API/BootAPI';
import axios from 'axios';

function Course({ value ,update}) {

  const deletecourse = (id) => {
    axios.delete(`${base_url}/courses/${id}`).then(
      (response) => {
        console.log(response);
        alert("Delete Successfully...!")
        update(id);
      }, (error) => {
        console.log(error);
        // alert("Delete successfully")
        console.log(error);
        
      }
    );

  };
  return (
    <div>
      <Card>
        <CardBody>
          <CardSubtitle  ><h4> {value.title}</h4></CardSubtitle>
          <CardText>{value.description}</CardText>
          <Container>
            <Button color='danger ' className='' onClick={() => { deletecourse(value.id); }}>Delete</Button>
            <Button color='warning ms-3'>Update</Button>
          </Container>
        </CardBody>
      </Card>
    </div>
  )
}

export default Course;
