import React, { Component } from "react";
import "./App.css";
import Navigator from "./Components/Navbar";
import PageNavigation from "./PageNavigation";
import { Button, ButtonGroup } from 'reactstrap';
class QuizCreation extends Component {
  render() {
    
    return (
      <div>
          <PageNavigation/>
      </div>
    );
  }
}

export default QuizCreation;