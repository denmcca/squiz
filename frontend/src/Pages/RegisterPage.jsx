import React, { Component } from "react";
import {
  Form,
  Col,
  FormGroup,
  Input,
  Alert,
} from 'reactstrap';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { registerUser } from "../actions/authentication";
import { db, writeUserData } from '../firebase';
import firebase from 'firebase';

class Register extends Component {
  constructor() {
    super();
    this.state = { 
      firstName: "",
      lastName: "",
      email: "",
      password1: "",
      password2: "",
      errors: {},
      loginMessage: null
    };

    // this.handleInputChange = this.handleInputChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount = () => {
    this.authListener();
  }

  // handleInputChange = (e) => {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   });
  // }

  handleSubmit = async(e) => {
    console.log('handleSubmit called');
    e.preventDefault();
    // const user = {
    //   name: this.state.name,
    //   email: this.state.email,
    //   username: this.state.username,
    //   password1: this.state.password1,
    //   password2: this.state.password2
    // };
    // this.props.registerUser(user, this.props.history);
    let goAhead = true;
    await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password1)
      .then((u) => {})
      .catch((error) => {
        alert(error)
        goAhead = false;
        // alert('login failed');
        this.setState({loginMessage: "Registration failed!"});
      });
    if (goAhead)
    {
      writeUserData(localStorage.getItem("user"), this.state.firstName, this.state.lastName, this.state.email);
      // let newUser = {firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email, };
      this.props.setFirstName(this.state.firstName);
      this.props.setLastName(this.state.lastName);
      this.props.setEmail(this.state.email);
      console.log(this.props.firstName, this.props.lastName, this.state.email);
      this.props.logUserIn();
      alert('user logged in!');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  authListener = () => {
  firebase.auth().onAuthStateChanged((user) => {
    var user = firebase.auth().currentUser;
    console.log("user: ", user);
    console.log("authListener (RegisterPage): ");
    if (user) {
        localStorage.setItem('user', user.uid)
    } else {
        this.setState({ user: null })
        localStorage.removeItem('user')
    }
  })
}

  render() {
    return (
      <div className="container" style={{ marginTop: "50px" }}>
        <h2 style={{ marginBottom: "40px" }}>Registration</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <Input
              type="text"
              placeholder="First Name"
              className="form-control"
              // name="name"
              id="userName"
              onChange={(text) => this.setState({ firstName: text.target.value })}
              value={this.state.firstName}
            />
          </div>
          <div className="form-group">
            <Input
              type="text"
              placeholder="Last Name"
              className="form-control"
              // name="name"
              id="userName"
              onChange={(text) => this.setState({ lastName: text.target.value })}
              value={this.state.lastName}
              />
          </div>
          <div className="form-group">
            <Input
              type="email"
              placeholder="Email"
              className="form-control"
              // name="email"
              id="userEmail"
              onChange={(text) => this.setState({ email: text.target.value })}
              value={this.state.email}
              />
          </div>
          <div className="form-group">
            <Input
              type="password"
              placeholder="Password"
              className="form-control"
              // name="password1"
              id="userPassword"
              onChange={(text) => this.setState({ password1: text.target.value })}
              value={this.state.password1}
              />
          </div>
          <div className="form-group">
            <Input
              type="password"
              placeholder="Confirm Password"
              className="form-control"
              name="password2"
              id="userPassword2"
              onChange={(text) => this.setState({ password2: text.target.value })}
              value={this.state.password2}
              />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary" onClick={() => this.handleSubmit.bind(this)}>
              Register User
            </button>
            {this.state.loginMessage ? 
              <Alert color='danger'>
                {this.state.loginMessage}
              </Alert>
              : null}
          </div>
        </form>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  logUserIn: () => dispatch({type:"LOGIN"}),
  // setUser: (user) => dispatch({type:'SET_USER', value:user})
  setFirstName: (firstName) => dispatch({type:'SET_FNAME', value:firstName}),
  setLastName: (lastName) => dispatch({type:'SET_LNAME', value:lastName}),
  setEmail: (email) => dispatch({type: 'SET_EMAIL', value:email})
})

export default connect(mapStateToProps, mapDispatchToProps)(Register);
