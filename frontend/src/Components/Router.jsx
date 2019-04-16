import React, { Component } from 'react';
import { Route, BrowserRouter} from 'react-router-dom';
import LoginPage from '../Pages/LoginPage';
import RegisterPage from '../Pages/RegisterPage';
import HomePage from '../Pages/HomePage';
import CreateQuizPage from '../Pages/CreateQuizPage';
import WelcomePage from '../Pages/Welcome';
import GradesPage from '../Pages/GradesPage';


export default class Router extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: this.props.isLoggedIn,
    }
  }

  // isLoggedIn() {
  //   // let message = this.state.isLoggedIn? 'Logged In' : 'Not Logged In';
  //   let navPage = this.state.isLoggedIn? <PageNavigation /> : null;
  //   let bodyPage = this.state.isLoggedIn? <CreateQuizPage /> : <Welcome />;
  //   return (
  //     <div>
  //       {this.state.isLoggedIn? <PageNavigation /> : null}
  //       {this.state.isLoggedIn? <CreateQuizPage /> : <Welcome />}
  //     </div>
  //   );
  // }

  render() {
    if(this.state.isLoggedIn) {
      return(
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <div>
            <Route exact path='/' component={LoginPage} />
            <Route exact path='/login' component={LoginPage} />
            <Route exact path='/CreateQuiz' component={CreateQuizPage} />
            <Route exact path='/register' component ={RegisterPage} />
            <Route exact path='/grades' component={GradesPage} />
          </div>
        </BrowserRouter>
      )
    }
    else {
      return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <div>
            <Route component={WelcomePage} />
            <Route exact path='/login' component={LoginPage} />
          </div>
        </BrowserRouter>
      )
    }
  }
}