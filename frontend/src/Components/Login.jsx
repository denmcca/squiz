import React, { Component } from "react";
import "../App.css";
import {    
    Form,
    Col,
    Button,
    FormGroup, 
    Label, 
    Input, 
    FormText 
} from 'reactstrap';
import SquizLogo from '../squiz logo.png';
import { connect } from 'react-redux';

class Login extends React.Component {
  render() {  
    return (
        <Form width="50%">
            <FormGroup row>
                <Label for="exampleEmail" sm={2}>Email</Label>
                <Col sm={10}>
                    <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="examplePassword" sm={2}>Password</Label>
                <Col sm={10}>
                    <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                </Col>
            </FormGroup>
            <FormGroup check row>
                <Col sm={{ size: 10, offset: 2 }}>
                    <Button onClick={ function() { alert('click');}}>Submit</Button>
                </Col>
            </FormGroup>
        </Form>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        userName: state.userName,
        password: state.password // placeholder
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        logUserIn: () => dispatch({type:'LOGIN'}),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);