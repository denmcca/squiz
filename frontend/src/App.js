import React, { Component } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import QuizCreation from "./QuizCreation";
import PageNavigation from "./Components/PageNavigation";
import Router from "./Components/Router";
class App extends Component {
  render() {

    return (
      <div className="App">
        <PageNavigation/>
        <Router/>
      </div>
    );
  }
}

export default App;
