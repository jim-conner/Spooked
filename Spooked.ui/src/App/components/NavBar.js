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
import { firstSignIn, signOutUser } from '../../helpers/auth';

function NavBar({ user }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const authButtons = () => (
    <>
          {
            user
              ? <Button color='dark' style={{ color: 'orangered' }}
                  onClick={signOutUser}>
                    Logout
                  </Button>
              : <Button color='dark' style={{ color: 'orangered' }}
                  onClick={firstSignIn}>
                    {/* {newUser === true ? 'Create Account' : 'Login'} */}
                    Login
                </Button>
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
              {
              user !== null
                && <ButtonGroup>
                  {authButtons()}
                </ButtonGroup>
              }
        </Collapse>
      </Navbar>
    </div>
  );
}

NavBar.propTypes = {
  user: PropTypes.any,
  // newUser: PropTypes.bool
};

export default NavBar;
