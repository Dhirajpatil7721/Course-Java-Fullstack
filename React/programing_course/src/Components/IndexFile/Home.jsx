import React,{useEffect} from 'react'
import {Button, Card,CardBody} from 'reactstrap'


function Home() {
    useEffect (()=>{
        document.title="Home"
    },[])
    return (
        <div>
<Card>
    <CardBody>
        <h1>Home</h1>
        <h5>Please Add The Course</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa similique et sunt molestiae architecto voluptas delectus voluptatibus veritatis quibusdam non necessitatibus eveniet facere unde cumque nesciunt, quas tenetur quo cupiditate.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa similique et sunt molestiae architecto voluptas delectus voluptatibus veritatis quibusdam non necessitatibus eveniet facere unde cumque nesciunt, quas tenetur quo cupiditate.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa similique et sunt molestiae architecto voluptas delectus voluptatibus veritatis quibusdam non necessitatibus eveniet facere unde cumque nesciunt, quas tenetur quo cupiditate.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa similique et sunt molestiae architecto voluptas delectus voluptatibus veritatis quibusdam non necessitatibus eveniet facere unde cumque nesciunt, quas tenetur quo cupiditate.</p>
        <Button    color="primary"
    outline>Add Course</Button>
    </CardBody>
</Card>
        </div>
    )
}

export default Home
