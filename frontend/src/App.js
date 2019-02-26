import React, { Component } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import QuizCreation from "./QuizCreation";
import PageNavigation from "./Components/PageNavigation";
import Router from "./Components/Router";
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {

    return (
      <Provider store={store}>
        <div className="App">
          <PageNavigation/>
          <Router />
        </div>
      </Provider>
    );
  }
}

export default App;
