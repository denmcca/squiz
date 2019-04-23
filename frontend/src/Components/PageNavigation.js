import React, { Component } from "react";
import "../App.css";
import {
  Collapse,
  Navbar,
  // NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  NavDropdown,
  NavbarToggler,
  // Link,
  // NavLink,
  DropdownItem } from 'reactstrap';
import SquizLogo from '../squiz logo.png';
import { connect } from 'react-redux';
import {Link, NavLink} from 'react-router-dom';
import firebase from 'firebase'
class PageNavigation extends Component {
  shouldComponentUpdate = (state, props) => {
    console.log("Should component be updated: "/*+ state.isDropDownOpen + ' ' + this.props.isDropDownOpen*/);
    return true;
  }
  logOut(){
      firebase.auth().signOut();
      alert("Logged off")
      this.props.logUserOut();
  }
  render() {
    // let isDropDownOpen = false;
    console.log("PageNavigation: " + this.props.isLoggedIn);
    let loginText;
    let loginRoute;
    let loginMoreRoutes;
    loginText = this.props.isLoggedIn ? "Logout" : "Login";
    loginRoute = this.props.isLoggedIn ? "/login" : "/login";
    console.log("loginRoute: " + loginRoute);
    loginMoreRoutes = this.props.isLoggedIn ? displayMoreRoutes() : null;
    
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavLink to='/about'>
            <NavbarBrand>
                <img src={SquizLogo} alt="Squiz" width="100"/>
            </NavbarBrand>
          </NavLink>
          <Collapse className="font1" isOpen={this.props.isDropDownOpen} navbar>
            <Nav className="ml-auto" navbar>
              {this.props.isLoggedIn ? displayMoreRoutes(this.props.isDropDownOpen) : null}
              <NavItem className='navlink-format' className='navlink-format'>
                <NavLink className="font2" to={loginRoute} 
                            onClick={this.props.isLoggedIn ? this.logOut.bind(this) : this.props.logUserIn}
                            activeStyle={navLinkStyles.activeStyle}
                            style={navLinkStyles.defaultStyle}>
                  {loginText}
                </NavLink>
              </NavItem>
              <NavItem className='navlink-format'>
                <NavLink className="font2" to={this.props.isLoggedIn ? '/' : '/register'} 
                            activeStyle={navLinkStyles.activeStyle}
                            style={navLinkStyles.defaultStyle}>
                  {this.props.isLoggedIn ? '' : 'Register'}
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const navLinkStyles = {
  defaultStyle: {fontWeight: "bold",
  color: "black"},
  activeStyle: {fontWeight: "bold",
  color: "orange"},
  dropdownStyle: {fontWeight: "bold",
  color: "gray",
  verticalAlign: "top"},
}

function displayMoreRoutes(isDropDownOpen){
  // let activeStyle = {
  //   fontWeight: "bold",
  //   color: "red"
  // };
  // let defaultStyle = {
  //   fontWeight: "bold",
  //   color: "orange"
  // }
  return (
    <Nav>
      <NavItem className='navlink-format'>
        <NavLink to="/dash" 
          activeStyle={navLinkStyles.activeStyle}
          style={navLinkStyles.defaultStyle}>Dash</NavLink>
      </NavItem>
      <NavItem className='navlink-format'>    
        <NavLink to="/quizzes/"
          activeStyle={navLinkStyles.activeStyle}
          style={navLinkStyles.defaultStyle}>Quizzes</NavLink>
        </NavItem>
      <NavItem className='navlink-format'>  
        <NavLink to="/createquiz/"
          activeStyle={navLinkStyles.activeStyle}
          style={navLinkStyles.defaultStyle}>Create Quiz</NavLink>
      </NavItem>
      <NavItem className='navlink-format'>
        <NavLink to="/grades/"
            activeStyle={navLinkStyles.activeStyle}
            style={navLinkStyles.defaultStyle}>My Grades</NavLink>
      </NavItem>
      <NavItem className='navlink-format'>
        <NavLink to="/settings/"
            activeStyle={navLinkStyles.activeStyle}
            style={navLinkStyles.defaultStyle}>Settings</NavLink>
      </NavItem>
        <Collapse className="font1" isOpen={isDropDownOpen} navbar>

      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret style={navLinkStyles.dropdownStyle} className='navlink-format'>
          Classes
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>
            <NavLink to='/class1/'
              activeStyle={navLinkStyles.activeStyle}
              style={navLinkStyles.defaultStyle}>
              Class 1
            </NavLink>
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem>
            <NavLink to='/class2/'
              activeStyle={navLinkStyles.activeStyle}
              style={navLinkStyles.defaultStyle}>
              Class 2
            </NavLink>
            
          </DropdownItem>
          <DropdownItem divider />
        </DropdownMenu>
      </UncontrolledDropdown>
      </Collapse>
    </Nav>
  );
}

const mapStateToProps = (state) => {
  return {
    isDropDownOpen: state.rNav.isDropDownOpen,
    isLoggedIn: state.rLogin.isLoggedIn
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    openDropDown: () => dispatch({type: 'OPEN_DROPDOWN'}),
    logUserOut: () => dispatch({type: 'LOGOUT'}),
    logUserIn: () => dispatch({type: "LOGIN"})
  }
};

export default connect(mapStateToProps, mapDispatchToProps, null, { pure: false })(PageNavigation);