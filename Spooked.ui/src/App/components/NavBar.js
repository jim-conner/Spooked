import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  Nav,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  // Button,
  Form,
  // FormGroup,
  // FormText,
  // FormFeedback,
  // Label,
  Input,
  Button,
  InputGroup,
  // Button,
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
          <i className="fas fa-ghost" style={{ color: 'orange' }}/> SPOOKED!
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav
            className='nav-bar me-auto' navbar
          >
            <NavItem>
              <Link className='nav-link' to='/browse'>
                Browse
              </Link>
            </NavItem>
            <Form inline>
                <InputGroup>
                  <Input
                    size="sm"
                    type="search"
                    placeholder="Find a movie"
                  />
                  <Button
                  color='warning'
                  size="sm"
                  >
                  <i className="fas fa-search"></i>
                  </Button>
                </InputGroup>

            </Form>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

NavBar.propTypes = {

};

export default NavBar;
