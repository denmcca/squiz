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

class PageNavigation extends Component {
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
              <NavItem>
                <NavLink className="font2" to={loginRoute} 
                            onClick={this.props.isLoggedIn ? this.props.logUserOut : this.props.logUserIn}
                            activeStyle={navLinkStyles.activeStyle}
                            style={navLinkStyles.defaultStyle}>
                  {loginText}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="font2" to={this.props.isLoggedIn ? '/' : '/register'} 
                            activeStyle={navLinkStyles.activeStyle}
                            style={navLinkStyles.defaultStyle}>
                  {this.props.isLoggedIn ? '' : '/Register'}
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
      <NavItem>
        <NavLink to="/dash" 
          activeStyle={navLinkStyles.activeStyle}
          style={navLinkStyles.defaultStyle}>Dash</NavLink>
      </NavItem>
      <NavItem>    
        <NavLink to="/quizzes/"
          activeStyle={navLinkStyles.activeStyle}
          style={navLinkStyles.defaultStyle}>Quizzes</NavLink>
        </NavItem>
      <NavItem>  
        <NavLink to="/createquiz/"
          activeStyle={navLinkStyles.activeStyle}
          style={navLinkStyles.defaultStyle}>Create Quiz</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/grades/"
            activeStyle={navLinkStyles.activeStyle}
            style={navLinkStyles.defaultStyle}>My Grades</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/settings/"
            activeStyle={navLinkStyles.activeStyle}
            style={navLinkStyles.defaultStyle}>Settings</NavLink>
      </NavItem>
        <Collapse className="font1" isOpen={isDropDownOpen} navbar>

      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret style={navLinkStyles.dropdownStyle}>
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