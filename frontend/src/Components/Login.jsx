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

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
<<<<<<< HEAD

=======
            email: "",
            password: "",
            errors: {}
        };
        this.authListener = this.authListener.bind(this)
    }
    componentDidMount() {
        this.authListener();
    }
    authListener() {
        firebase.auth().onAuthStateChanged((user) => {
            console.log(user)
            if (user) {
                this.setState({ user })
                localStorage.setItem('user', user.uid)
            } else {
                this.setState({ user: null })
                localStorage.removeItem('user')
            }
        })
    }
    login= async(e) =>  {
        e.preventDefault();
        await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
        }).catch((error) => {
            alert(error)
        });
        // store this in redux store
        alert("Logged in as: " + localStorage.getItem('user'))
        if(localStorage.getItem('user') !== null){
            this.props.logUserIn()
>>>>>>> parent of 5dc08db... Registration now working. Login link in navbar now moves user to login page.
        }
    }

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

export default Login;