import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Collapse,
  Navbar,
  Nav,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  ButtonGroup,
  Button,
} from 'reactstrap';
import { signInUser, signOutUser } from '../../helpers/auth';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const authButtons = () => (
    <div>
      {
        user !== null
        && <ButtonGroup>
          {
            user
              ? <Button outline color='danger' onClick={signOutUser}>Logout</Button>
              : <Button outline color='success' onClick={signInUser}>Login</Button>
          }
        </ButtonGroup>
      }
      </div>
  );
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
            {authButtons()}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

NavBar.propTypes = {

};

export default NavBar;
