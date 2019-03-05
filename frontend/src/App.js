import React, { Component } from "react";
import "./App.css";
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import QuizCreation from "./QuizCreation";
import Welcome from "./Welcome";
import PageNavigation from "./PageNavigation";
import Background from './images/background_image.jpg';

var sectionStyle = {
  width: "100%", // controls width of element
  height: "25%", // controls height
  backgroundImage: `url(${Background})`
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
      message: 'Hello'

    }
  }

  isLoggedIn() {
    // let message = this.state.isLoggedIn? 'Logged In' : 'Not Logged In';
    let navPage = this.state.isLoggedIn? <PageNavigation /> : null;
    let bodyPage = this.state.isLoggedIn? <QuizCreation /> : <Welcome />;
    return (
      <Container>
        <div>
          {navPage}
          <Row className='bg-size'>
            <Col sm={4} >1</Col>
            <Col sm={4} >The Row</Col>
            <Col sm={4} >2</Col>
          </Row>
          <Row>ROW 2</Row>
          {bodyPage}
        </div>
      </Container>
    )
  }

  render() {
    let display;
    let message = this.state.message;
    display = message; 
    return (
      <div>
        <div className="App">
          {/* <div className="col-lg-1 col-centered"> */}
            {/* <PageNavigation/> */}
            {/* <div>{this.state.message}</div> */}
            {this.isLoggedIn()}
            {/* <display/> */}
            {/* <Welcome/> */}
          {/* </div> */}
        </div>
      </div>
    );
  }

}

export default App;
