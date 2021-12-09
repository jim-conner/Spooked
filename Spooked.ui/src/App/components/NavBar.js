import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Collapse, Navbar, Nav, NavbarBrand, NavbarToggler, NavItem
} from 'reactstrap';
// import PropTypes from 'prop-types'

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
    <Navbar
      color="faded"
      dark
    >
      <NavbarBrand
        className="me-auto"
        to="/"
      >
        reactstrap
      </NavbarBrand>
      <NavbarToggler
        className="me-2"
        onClick={toggle}
      />
      <Collapse navbar>
        <Nav navbar>
          <NavItem>
            <NavLink to="/browse/">
              Browse
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  </div>
  );
}

NavBar.propTypes = {

};

export default NavBar;
