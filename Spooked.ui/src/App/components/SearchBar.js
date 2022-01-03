import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  FormGroup,
  // Form,
  Input,
  InputGroup,
  // InputGroupText,
  // InputGroupText,
} from 'reactstrap';

function SearchBar({ search, setSearch }) {
  return (
      <div className='inputContainer'>
        <FormGroup>
          <InputGroup>
            <Button disabled outline style={{ color: 'orangered' }}>
              {<i className="fas fa-search"></i>}
            </Button>
            <Input
              type="search"
              placeholder="Search by movie title..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </InputGroup>
        </FormGroup>
    </div>
  );
}

SearchBar.propTypes = {
  search: PropTypes.string,
  setSearch: PropTypes.func
};

export default SearchBar;
