import React, { Component } from 'react';
import { Route, BrowserRouter} from 'react-router-dom';
import LoginPage from '../Pages/LoginPage';
import RegisterPage from '../Pages/RegisterPage';
import HomePage from '../Pages/HomePage';
import CreateQuizPage from '../Pages/CreateQuizPage';
import WelcomePage from '../Pages/Welcome';
import GradesPage from '../Pages/GradesPage';
import LogoutPage from '../Pages/LogoutPage';
import { connect } from 'react-redux';


class Router extends React.Component {
  render() {
    console.log("Rendering router: " + this.props.isLoggedIn);
    if(this.props.isLoggedIn) {
      return(
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <div>
            <Route exact path='/' component={HomePage} />
            <Route exact path="/welcome" component={WelcomePage} />
            <Route exact path='/logout' component={LogoutPage} />
            {/* <Route path="/abc" render={(props) => <TestWidget {...props} someProp={100} />} /> */}
            <Route exact path='/createquiz' component={CreateQuizPage} />
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
            <Route exact path='/logout' component={LogoutPage} />
            <Route exact path='/login' component={LoginPage} />
          </div>
        </BrowserRouter>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn:state.isLoggedIn
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    logUserOut: () => dispatch({type: 'LOGOUT'})
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Router)