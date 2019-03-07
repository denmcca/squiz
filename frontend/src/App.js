import React, { Component } from "react";
import "./App.css";
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from "./Welcome";
import Background from './images/background_image.jpg';
import CreateQuizPage from './Pages/CreateQuizPage';
import PageNavigation from "./Components/PageNavigation";
import Router from "./Components/Router";
import { Provider } from 'react-redux';
import store from './store';

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
    let bodyPage = this.state.isLoggedIn? <CreateQuizPage/> : <Welcome />;
    return (
      <Provider store={store}>
        <div className="App">
          <PageNavigation/>
          <Router />
        </div>
      </Provider>
    );
  }

  render(){
    return(
      <Provider store={store}>
        <div className="App">
          <PageNavigation/>
          <Router />
        </div>
      </Provider>
    )
  }

}

export default App;
