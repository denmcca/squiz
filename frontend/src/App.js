import React, { Component } from "react";
import "./App.css";
import fire from './firebase'
// import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Welcome from "./Pages/Welcome";
// import CreateQuizPage from './Pages/CreateQuizPage';
import PageNavigation from "./Components/PageNavigation";
// import { button } from 'react'
// import Router from "./Components/Router";
import { connect } from 'react-redux'

// import {Link} from 'react-router-dom'


// ReactDOM.render(<Provider store = {store}><App /></Provider>, document.getElementById('root'));



class App extends Component {
  render() {
    console.log('App: ' + this.props.isLoggedIn);
    // const Props = {
    //   isLoggedIn: this.state.isLoggedIn,
    //   toggleIsLoggedIn: this.toggleIsLoggedIn,
    // };
    return(
      <div className="center-content">
        <div className="App">
          <div>
            <PageNavigation />
            {/* <Router /> */}
            <span><p>{this.props.isLoggedIn ? "true" : "false"}</p></span>
            <button onClick={this.props.logInUser}>{this.props.isLoggedIn}</button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.rLogin.isLoggedIn
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    logInUser: () => dispatch({type: 'LOGIN'}),
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
