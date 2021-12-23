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

function NavBar({ user }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const authButtons = () => (
    <>
      {
        user !== null
        && <ButtonGroup>
          {
            user
              ? <Button outline color='danger'
                  onClick={signOutUser}>
                    Logout
                  </Button>
              : <Button color='dark' style={{ color: 'orangered' }}
                  onClick={signInUser}>{''}
                    {user !== null && {}
                      ? 'Create an Account' : 'Login'}
                  </Button>
          }
        </ButtonGroup>
      }
      </>
  );

  return (
    <div>
      <Navbar
        color='dark'
        expand='sm'
        dark
      >
        <NavbarBrand
          className='me-auto'
        >
          <i className="fas fa-ghost" style={{ color: 'orangered' }}/>
            {' '} SPOOKED
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav
            className='nav-bar me-auto'
            navbar
          >
            <NavItem>
              <Link className='nav-link' to='/'>
                {<i className="fas fa-spider"></i>} Browse
              </Link>
            </NavItem>
            {
              user !== null
                && <>
                {
                  user
                    ? <NavItem>
                        <Link className='nav-link' to='/watchlist'>
                          <i className="fas fa-book-dead"></i> Watch List
                        </Link>
                      </NavItem>
                    : ''
                }
                </>
            }
          </Nav>
            {authButtons()}
        </Collapse>
      </Navbar>
    </div>
  );
}

NavBar.propTypes = {
  user: PropTypes.any
};

export default NavBar;
