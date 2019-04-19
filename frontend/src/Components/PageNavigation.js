import React, { Component } from "react";
import "../App.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import SquizLogo from '../squiz logo.png';
import { connect } from 'react-redux';

class PageNavigation extends Component {
  // constructor() {
  //   this.state = {
  //     isOpen: false,
  //   };
  // }

  // toggle() {
  //   this.setState({
  //     isOpen: !this.state.isOpen
  //   });
  // }

  

  render() {
    console.log("PageNavigation: " + this.props.isLoggedIn);
    let loginText;
    let loginRoute;
    let loginMoreRoutes;
    loginText = this.props.isLoggedIn ? "Logout" : "Login";
    loginRoute = this.props.isLoggedIn ? "/logout/" : "/login/";
    loginMoreRoutes = this.props.isLoggedIn ? displayMoreRoutes() : null;
    
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">
          <img src={SquizLogo} alt="Squiz" width="100"/>
          </NavbarBrand>
          <Collapse className="font1" isOpen={this.props.isDropDownOpen} navbar>
            <Nav className="ml-auto" navbar>
              {loginMoreRoutes}
              <NavItem>
                <NavLink className="font2" href={loginRoute} onClick={this.props.logUserOut}>{loginText}</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

function displayMoreRoutes(){
  return (
    <Nav>
      <NavItem>
        <NavLink href="/">Dash</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/quizzes/">Quizzes</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/createquiz/">Create Quiz</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/grades/">My Grades</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/settings/">Settings</NavLink>
      </NavItem>
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Classes
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>
            Class 1
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem>
            Class 2
          </DropdownItem>
          <DropdownItem divider />
        </DropdownMenu>
      </UncontrolledDropdown>
    </Nav>
  );
}

const mapStateToProps = (state) => {
  return {
    isDropDownOpen: state.isDropDownOpen,
    isLoggedIn: state.isLoggedIn
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    openDropDown: () => dispatch({type: 'OPEN_DROPDOWN'}),
    logUserOut: () => dispatch({type: 'LOGOUT'})
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PageNavigation);