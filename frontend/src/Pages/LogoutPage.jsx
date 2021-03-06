import React, { Component } from "react";
import SquizLogo from '../squiz logo.png';
import { connect } from 'react-redux';

// import React from 'react';
// import { Alert } from 'reactstrap';

import "../App.css";

class Logout extends Component {
    constructor(props){
        super(props);
    }
    
    render() {  
    console.log("Rendering Logout: ");
    return (
      <div className="bg-size">
        <img src={SquizLogo} alt="Squiz" width="500"/>
        <p>You have been logged out.</p>
        <a href='/Welcome/' onClick={this.props.logInUser}>Click here to login.</a>
        {/* <Example /> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    isLoggedIn:state.rLogin.isLoggedIn,
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    logInUser: () => dispatch({type:'LOGIN'})
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Logout);


// const Example = (props) => {
//     return (
//       <div>
//         <Alert color="primary">
//           This is a primary alert — check it out!
//         </Alert>
//         <Alert color="secondary">
//           This is a secondary alert — check it out!
//         </Alert>
//         <Alert color="success">
//           This is a success alert — check it out!
//         </Alert>
//         <Alert color="danger">
//           This is a danger alert — check it out!
//         </Alert>
//         <Alert color="warning">
//           This is a warning alert — check it out!
//         </Alert>
//         <Alert color="info">
//           This is a info alert — check it out!
//         </Alert>
//         <Alert color="light">
//           This is a light alert — check it out!
//         </Alert>
//         <Alert color="dark">
//           This is a dark alert — check it out!
//         </Alert>
//       </div>
//     );
//   };