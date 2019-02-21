import React, { Component } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import QuizCreation from "./QuizCreation";
import PageNavigation from "./PageNavigation";
class App extends Component {
  render() {

    return (
      <div className="App">
        <PageNavigation/>
        <QuizCreation/>
      </div>
    );
  }
}

export default App;
