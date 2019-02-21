import React, { Component } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import QuizCreation from "./QuizCreation";
class App extends Component {
  render() {

    return (
      <div className="App">
        <QuizCreation />
      </div>
    );
  }
}

export default App;
