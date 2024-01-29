/* eslint-disable */
import logo from './logo.svg';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";
import {Button, Navbar, Container, Nav, Col ,Row} from 'react-bootstrap';
import img1 from './con1.jpeg';
import img2 from './con2.jpeg';
import img3 from './con3.jpeg';
import data from './data.js';




function App() {

let [products] = useState(data)

  return (
    <div className="App">
  
    <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home" className='homeLogo'>HaniCHU</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" className='menuText'>Home</Nav.Link>
            <Nav.Link href="#features" className='menuText'>Item</Nav.Link>
            <Nav.Link href="#pricing" className='menuText'>Sale</Nav.Link>
            <Nav.Link href="#pricing" className='menuText'>More</Nav.Link>
            <Nav.Link href="#pricing" className='menuText'>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main-bg'></div>
      <br/>
      
      {/* <Container> */}
        <Row>
          <Col>
            <div className='container-img'>
              <img src={img1}></img>
              <h4>{products[0].title}</h4>
              <p>{products[0].content}</p>
              <p>{products[0].price}원</p>
            </div>
          </Col>
          <Col>
            <div className='container-img'>
              <img src={img2} ></img>
              <h4>{products[1].title}</h4>
              <p>{products[1].content}</p>
              <p>{products[1].price}원</p>
            </div>
          </Col>
          <Col>
            <div className='container-img'>
            <img src={img3} ></img>
              <h4>{products[2].title}</h4>
              <p>{products[2].content}</p>
              <p>{products[2].price}원</p>
            </div>
          </Col>
        </Row>
    {/* </Container> */}
    </div>
  );
}

export default App;
