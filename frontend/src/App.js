import React, { Component } from "react";
import "./App.css";
// import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Welcome from "./Pages/Welcome";
// import CreateQuizPage from './Pages/CreateQuizPage';
import PageNavigation from "./Components/PageNavigation";
import Router from "./Components/Router";
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {

  render(){
    return(
      <Provider store={store}>
        <div className="center-content">
          <div className="App">
            <div>
              <PageNavigation />
              <Router />
            </div>
          </div>
        </div>
      </Provider>
    )
  }

}

export default App;
