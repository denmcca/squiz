import React, { Component } from "react";
import SquizLogo from '../squiz logo.png';

import "../App.css";
import { Button, ButtonGroup } from 'reactstrap';

class Welcome extends Component {
  render() {
    
    return (
      <div className="bg-size">
        <img src={SquizLogo} alt="Squiz" width="500"/>
        <p>Login goes here</p>
        <p>Registration goes here</p>
      </div>
    );
  }
}

export default Welcome;