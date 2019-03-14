import React, { Component } from "react";
import "./App.css";
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from "./Pages/Welcome";
import CreateQuizPage from './Pages/CreateQuizPage';
import PageNavigation from "./Components/PageNavigation";
import Router from "./Components/Router";
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      // message: 'Hello'

    }
  }

  isLoggedIn() {
    // let message = this.state.isLoggedIn? 'Logged In' : 'Not Logged In';
    let navPage = this.state.isLoggedIn? <PageNavigation /> : null;
    let bodyPage = this.state.isLoggedIn? <CreateQuizPage /> : <Welcome />;
    return (
      <div>
        {this.state.isLoggedIn? <PageNavigation /> : null}
        {this.state.isLoggedIn? <CreateQuizPage /> : <Welcome />}
      </div>
    );
  }

  render(){
    return(
      <Provider store={store}>
        <div className="center-content">
          <div className="App">
            <div>
              {this.isLoggedIn()}
              <Router />
            </div>
          </div>
        </div>
      </Provider>
    )
  }

}

export default App;
