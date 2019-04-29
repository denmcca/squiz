import React, { Component } from 'react';
import { Route, BrowserRouter, Switch} from 'react-router-dom';
import LoginPage from '../Pages/LoginPage';
import RegisterPage from '../Pages/RegisterPage';
import HomePage from '../Pages/HomePage';
import CreateQuizPage from '../Pages/CreateQuizPage';
import WelcomePage from '../Pages/Welcome';
import GradesPage from '../Pages/GradesPage';
import LogoutPage from '../Pages/LogoutPage';
import AboutPage from '../Pages/AboutPage'
import PlaceHolderPage from '../Pages/PlaceHolderPage'
import QuizTakingPage from '../Pages/QuizTakingPage'
import { connect } from 'react-redux';
import PageNavigation from './PageNavigation'
import PageNotFound from '../Pages/404'
import { Container } from 'reactstrap';


class Router extends React.Component {
  render() {
    console.log("Rendering Router: " + this.props.isLoggedIn);
    return(
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className='app-center'>
        <div className="app-size">
          <PageNavigation />
          <Switch>
          <Route exact path='/about' component={ AboutPage } />
          <Route exact path='/createquiz' component={ this.props.isLoggedIn ? CreateQuizPage : WelcomePage } />
          <Route exact path='/dash' component={ this.props.isLoggedIn ? HomePage : WelcomePage } />
          <Route exact path='/grades' component={ this.props.isLoggedIn ? GradesPage : WelcomePage } />
          <Route exact path='/login' component={ this.props.isLoggedIn ? WelcomePage : LoginPage } />
          <Route exact path='/quizzes' component={ this.props.isLoggedIn ? QuizTakingPage : WelcomePage } />
          <Route exact path='/register' component ={ this.props.isLoggedIn ? WelcomePage : RegisterPage } />
          <Route exact path="/welcome" component={ this.props.isLoggedIn ? WelcomePage : LoginPage } />
          <Route exact path="/" component={ this.props.isLoggedIn ? WelcomePage : LoginPage } />
          <Route path="/" component={ PageNotFound } />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn:state.rLogin.isLoggedIn
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    logUserOut: () => dispatch({type: 'LOGOUT'})
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Router)