import React from "react";
import {connect} from 'react-redux';
import PropTypes  from 'prop-types';
import {withRouter} from 'react-router-dom';
import Login from '../Components/Login'
import SquizLogo from '../squiz logo.png';

class LoginPage extends React.Component {

  signup(e){
    e.preventDefault();
    this.props.setEmail(e.target.value);
    this.props.setPassword(e.target.value);
  }
  render() {
    console.log("Rendering LoginPage ");
    return (
      <div align='center' class='bg-size'>
        <img src={SquizLogo} alt="Squiz" width="500"/>
        <Login/>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn:state.rLogin.isLoggedIn,
    email:state.rLogin.email,
    password:state.rLogin.password
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: () => dispatch({type:'LOGIN'}),
    setEmail: (email) => dispatch({type:'EMAIL_SET',value:email}),
    setPassword: (password) => dispatch({type:'PASSWORD_SET', value:password})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginPage));
