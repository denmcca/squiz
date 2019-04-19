import React from "react";
import {connect} from 'react-redux';
import PropTypes  from 'prop-types';
import {withRouter} from 'react-router-dom';
import {loginUser} from '../actions/authentication';
import Form from 'react';
import Button from 'react';


class Login extends React.Component {
  // constructor(props) {
  //   super(props);
  //   // this.toggleIsLoggedIn = this.props.toggleIsLoggedIn();
  //   this.state = {
  //     email: "",
  //     password: "",
  //     errors: {}
  //   };

  //   this.handleInputChange = this.handleInputChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
    this.props.setEmail(e.taget.value)
  }

  handleSubmit(e) {
    e.preventDefault();
    // const user = {
    //   username: this.props.username,
    //   password: this.props.password
    // };
    // this.props.loginUser();
    this.props.setEmail(e.target.value);
    this.props.setPassword(e.target.value);
  }

  render() {
    
    console.log("Rendering LoginPage ");
    return (
      <div className="container" style={{ marginTop: "50px" }}>
        <h2 style={{ marginBottom: "40px" }}>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Username"
              className="form-control"
              name="username"
              onChange={this.handleInputChange}
              value={this.props.email}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              className="form-control"
              name="password"
              onChange={this.handleInputChange}
              value={this.props.password}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary" onClick={this.props.loginUser}>
              Login User
            </button>
          </div>
        </form>
        {/* <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicChecbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>; */}
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn:state.isLoggedIn,
    email:state.email,
    password:state.password
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    // user: { email: this.state.email, password: this.state.password },
    loginUser: () => dispatch({type:'LOGIN'}),
    setEmail: (email) => dispatch({type:'EMAIL_SET',value:email}),
    setPassword: (password) => dispatch({type:'PASSWORD_SET'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));