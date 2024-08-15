import './App.css';
import { Button, Container, Row, Col } from "reactstrap";
import Header from './Components/IndexFile/Header';
import Menues from './Components/Menues';
import Home from './Components/IndexFile/Home';
import { BrowserRouter as Router, Route,Routes  } from 'react-router-dom';
import Addcourses from './Components/IndexFile/Addcourses';
import AllCourses from './Components/IndexFile/AllCourses';

function App() {

  return (
    <div className="App">

      <Router>
        <Container>
          <Header />
          <Row md={12}>
            <Col md={4}><h5>  <Menues /> </h5></Col>

            <Col md={8}>
            <Routes>

              <Route path='/' element={<Home />} excat/>
              <Route path='/Addcourses' element={<Addcourses/>} excat/>
              <Route path='/AllCourses' element={<AllCourses/>} excat/>
              
            </Routes>

            </Col>
          </Row>
        </Container>
      </Router>



    </div>
  );
}

export default App;
