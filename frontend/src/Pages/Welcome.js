import React, { Component } from "react";
import SquizLogo from '../squiz logo.png';
import Login from '../Components/Login';
import {connect} from 'react-redux';

import "../App.css";
// import { Button, ButtonGroup } from 'reactstrap';

class Welcome extends Component {
  render() {
    console.log('Rendering Welcome: ' + this.props.isLoggedIn);
    let body = this.props.isLoggedIn ? welcomeMessage() : <Login />;
      return (
        // <body height={'100%'}>
          <div align='center' className='bg-size'>
            <img src={SquizLogo} alt="Squiz" width="500"/>
            {body}
          </div>
          // </body>
    );
  }
}

function welcomeMessage() {
  return ( 
    <p>You have been logged in! Welcome!</p>
  );
}

const mapStateToProps = (state) => {
  return ( 
    {
      isLoggedIn: state.rLogin.isLoggedIn
    }
  );
};

export default connect(mapStateToProps)(Welcome);