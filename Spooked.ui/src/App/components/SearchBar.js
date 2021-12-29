import React from 'react';
import PropTypes from 'prop-types';
import {
  FormGroup,
  // Form,
  Input,
  InputGroup,
  // InputGroupText,
} from 'reactstrap';

function SearchBar({ search, setSearch }) {
  return (
      <>
        <FormGroup>
          <InputGroup>
            {/* <InputGroupText>
              {<i className="fas fa-search"></i>}
            </InputGroupText> */}
            <Input
              type="search"
              placeholder="Search by movie title..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </InputGroup>
        </FormGroup>
    </>
  );
}

SearchBar.propTypes = {
  search: PropTypes.string,
  setSearch: PropTypes.func
};

export default SearchBar;
