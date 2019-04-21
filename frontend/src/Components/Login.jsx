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
                        <Button onClick={() => this.props.logUserIn()}>Submit</Button>
                    </Col>
                </FormGroup>
            </Form>
        </div>
    );
  }
}

const onSubmitClicked = (...props) => {
    // updateEmail()
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