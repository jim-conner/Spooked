import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  Nav,
  NavbarBrand,
  NavbarToggler,
  NavItem,
} from 'reactstrap';
// import PropTypes from 'prop-types'

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar
        color='dark'
        expand='sm'
        dark
      >
        <NavbarBrand
          href='/' className='me-auto'
        >
          <i className="fas fa-ghost" style={{ color: 'orangered' }}/> SPOOKED!
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav
            className='nav-bar me-auto' navbar
          >
            <NavItem>
              <Link className='nav-link' to='/browse'>
                {<i className="fas fa-spider"></i>} Browse
              </Link>
            </NavItem>
            <NavItem>
              <Link className='nav-link' to='/watchlist'>
              <i className="fas fa-mask"></i> Watch List
              </Link>
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
