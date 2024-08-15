import React from 'react'
import { Link } from 'react-router-dom';
import {ListGroup,ListGroupItem} from 'reactstrap'

function Menues() {
    return (
        <div>
<ListGroup>
    <Link className="list-group-item list-group-item-action" tag="a" to='/' action>Home</Link>
    <Link className="list-group-item list-group-item-action" tag="a" to='/Addcourses' action>Add Course</Link>
    <Link className="list-group-item list-group-item-action" tag="a" to='/AllCourses' action>View Course</Link>
    <Link className="list-group-item list-group-item-action" tag="a" to='#!' action>About</Link>
    <Link className="list-group-item list-group-item-action" tag="a" to='#!' action>Contact</Link>
</ListGroup>
        </div>

)
}

export default Menues