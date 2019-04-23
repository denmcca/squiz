import React, { Component } from "react";
import "../App.css";
import {    
    Form,
    Col,
    Button,
    FormGroup, 
    Label, 
    Input, 
    FormText,
    NavLink,
    NavItem 
} from 'reactstrap';
import { Route, Redirect } from 'react-router-dom';

// import SquizLogo from '../squiz logo.png';
import { connect } from 'react-redux';

class Login extends React.Component {
    // function validateLoginCredentials = (props) => {
    //     // validate login
    //     // if false return false
    //     props.logUserIn();
    //     // if true 
    //     // return true;
    // }

    showAlert() {
        alert("Im an alert");
      }

  render() {  
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>   
            <Form>
                <FormGroup row>
                    <Col sm={15}>
                        <Input type="email" name="email" id="userEmail" placeholder="Enter email" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col sm={15}>
                        <Input type="password" name="password" id="userPassword" placeholder="Enter password" />
                    </Col>
                </FormGroup>
                <FormGroup check row>
                    <Col offset={7}>
                        <button type="submit" className="btn btn-primary" onClick={this.props.logUserIn}>Submit</button>
                    </Col>
                </FormGroup>
            </Form>
        </div>
    );
  }
}



const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.rLogin.isLoggedIn,
        email: state.rUser.email,
        password: state.rUser.password // placeholder
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        logUserIn: () => dispatch({type:'LOGIN'}),
        updateEmail: () => dispatch({type:'UPDATE_EMAIL'}),
        updatePassword: () => dispatch({type:'UPDATE_PASSWORD'})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);