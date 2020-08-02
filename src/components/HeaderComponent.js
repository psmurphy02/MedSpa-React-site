import React, { Component } from "react";
import { Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, Collapse } from "reactstrap";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false,
    };
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  render() {
    return (
      <>
        <Navbar color="faded" light expand="md">
            <NavbarBrand href="/">
              <img
                src="/images/pmmd_logo.png"
                height="70"
                width="70"
                alt="Office Logo"
              />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink className="nav-link" to="/home">home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/services">services</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/products">products</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/about">about</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/contact">contact</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
      </>
    );
  }
}


