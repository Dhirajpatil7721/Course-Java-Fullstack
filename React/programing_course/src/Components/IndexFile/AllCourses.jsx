import React, { useEffect, useState } from 'react'
import Course from './Course';
import { Button } from 'reactstrap';
import axios from 'axios';
import base_url from '../../API/BootAPI';


function AllCourses() {


    
    // function to call server
    
    const getAllCoursesFromServer = () => {
        axios.get(`${base_url}/courses`).then(
            (response) => {
                //success 
                console.log(response.data);
                setCourses(response.data);
            },
            (error) => {
                //for error
                console.log(error);
            }
        )
    };
    
    useEffect(() => {
        document.title = "All Courses";
        getAllCoursesFromServer();
    }, [])

    //remove Course from UI
    const updateCoursesFromUI=(id)=>{

        setCourses(courses.filter((item)=>item.id !== id));

    }
    
    const [courses, setCourses] = useState([

        // { title: "Java", description: "Java OOPS" },
        // { title: "React", description: "React OOPS" },
        // { title: "JS", description: "JS OOPS" },
        // { title: "C++", description: "C++ OOPS" }

    ])

    return (

        <div>
            {/* <Button onClick={()=>{ setCourses([...courses , {title:"C++",description:"C++ OOPS"}]) }}>Test</Button> */}
            <h1>All Courses</h1>
            {courses.length > 0 ? courses.map((item) => <Course key={item.id} value={item} update={updateCoursesFromUI}></Course>) : "No Course Yet"}
        </div>
    )
}

export default AllCourses;


