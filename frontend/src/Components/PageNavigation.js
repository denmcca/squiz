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

class PageNavigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      isLoggedIn: this.props.isLoggedIn,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
  
    let loginText;
    let loginRoute;
    let loginMoreRoutes;
<<<<<<< HEAD

    loginText = this.state.isLoggedIn ? "Logout" : "Login";
    loginRoute = this.state.isLoggedIn ? "/Logout/" : "/Login";
    loginMoreRoutes = this.state.isLoggedIn ? displayMoreRoutes() : null;

=======
    loginText = this.props.isLoggedIn ? "Logout" : "Login";
    loginRoute = this.props.isLoggedIn ? "/login" : "/login";
    console.log("loginRoute: " + loginRoute);
    loginMoreRoutes = this.props.isLoggedIn ? displayMoreRoutes() : null;
    
>>>>>>> parent of 5dc08db... Registration now working. Login link in navbar now moves user to login page.
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">
          <img src={SquizLogo} alt="Squiz" width="100"/>
          </NavbarBrand>
          {/* <NavbarToggler onClick={this.toggle} />  not sure what this does*/}
          <Collapse className="font1" isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
<<<<<<< HEAD
              {loginMoreRoutes}
              {/* {displayMoreRoutes} */}
              <NavItem >
                <NavLink className="font2" href={loginRoute}>{loginText}</NavLink>
=======
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
>>>>>>> parent of 5dc08db... Registration now working. Login link in navbar now moves user to login page.
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
        <NavLink href="/Quizzes/">Quizzes</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/CreateQuiz/">Create Quiz</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/grades/">My Grades</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/Settings/">Settings</NavLink>
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

export default PageNavigation;