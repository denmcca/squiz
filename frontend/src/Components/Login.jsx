import React, { Component } from "react";
import "../App.css";
import {
    Form,
    Col,
    FormGroup,
    Input,
} from 'reactstrap';
import firebase from 'firebase'
// import SquizLogo from '../squiz logo.png';
import { connect } from 'react-redux';
import { db } from '../firebase';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
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
                this.setState({ user:user })
                localStorage.setItem('user', user.uid)
            } else {
                this.setState({ user: null })
                localStorage.removeItem('user')
            }
        })
    }
    login= async(e) =>  {
        console.log("login called: ");
        e.preventDefault();
        await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
        }).catch((error) => {
            alert(error)
        });
        // store this in redux store
        if(localStorage.getItem('user') !== null){
            db.ref("account/" + localStorage.getItem('user') + '/userInfo')
            .once('value')
            .then((snapshot) =>
            {
                this.props.setFirstName((snapshot.val() && snapshot.val().firstName || 'Anonymous'))
                this.props.setLastName((snapshot.val() && snapshot.val().lastName || 'Anonymous'))
            })
            this.props.logUserIn()
        }
    }
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Form>
                    <FormGroup row>
                        <Col sm={15}>
                            <Input type="email" name="email" id="userEmail" placeholder="Enter email"
                                onChange={(text) => this.setState({ email: text.target.value })} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col sm={15}>
                            <Input type="password" name="password" id="userPassword" placeholder="Enter password"
                                onChange={(text) => this.setState({ password: text.target.value })} />
                        </Col>
                    </FormGroup>
                    <FormGroup check row>
                        <Col offset={7}>
                            <button type="submit" className="btn btn-primary" onClick={this.login.bind(this)}>Submit</button>
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
        logUserIn: () => dispatch({ type: 'LOGIN' }),
        // setUser: (user) => dispatch({type: 'SET_USER', value:user}),
        setFirstName: (fname) => dispatch({type: 'SET_FNAME', value:fname}),
        setLastName: (lname) => dispatch({type: 'SET_LNAME', value:lname}),
        updateEmail: (email) => dispatch({ type: 'UPDATE_EMAIL', value:email }),
        updatePassword: (password) => dispatch({ type: 'UPDATE_PASSWORD', value:password })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);