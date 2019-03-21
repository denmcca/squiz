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
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }    
  render() {
    
    return (
        <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">
          <img src={SquizLogo} alt="Squiz" width="100"/>
          </NavbarBrand>
          {/* <NavbarToggler onClick={this.toggle} />  not sure what this does*/}
          <Collapse className="font1" isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem >
                <NavLink className="font2" href="/login">Login</NavLink>
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
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default PageNavigation;