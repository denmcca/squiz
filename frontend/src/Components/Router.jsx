import React, { Component } from 'react';
import { Route, BrowserRouter} from 'react-router-dom';
import LoginPage from '../Pages/LoginPage';

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div>
          <Route exact path='/login' component={LoginPage} />
        </div>
      </BrowserRouter>
    )
  }
}