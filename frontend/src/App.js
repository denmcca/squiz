import React, { Component } from "react";
import "./App.css";
import fire from './firebase'
// import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Welcome from "./Pages/Welcome";
// import CreateQuizPage from './Pages/CreateQuizPage';
import PageNavigation from "./Components/PageNavigation";
import Router from "./Components/Router";
import { Provider } from 'react-redux';
import store from './store';
import HomePage from "./Pages/HomePage";
import LoginPage from './Pages/LoginPage';
import router from './Components/Router'

class App extends Component {
  constructor() {
    super();
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }
  render() {
    return (
      <div className="App">
        {this.state.user ? (
          <view>

            <PageNavigation isLoggedIn={true} />
            <HomePage />
          </view>
        ) :
          (
            <LoginPage />
          )}
      </div>
    );
  }
}

export default App;