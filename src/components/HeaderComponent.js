import React, { Component } from "react";
import { Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Collapse } from "reactstrap";

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
                        <NavLink href="/">home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/ServicesComponent">services</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/ProductsComponent">products</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/AboutComponent">about</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/ContactComponent">contact</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
      </>
    );
  }
}


