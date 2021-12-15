import React from 'react';
import PropTypes from 'prop-types';
import {
  // Form,
  Input,
  InputGroup,
  InputGroupText,
} from 'reactstrap';

function SearchBar({ search, setSearch }) {
  return (
      <div>
        <InputGroup>
          <InputGroupText style={{ backgroundColor: 'orangered' }}>
            {<i className="fas fa-search"></i>}
          </InputGroupText>
          <Input
            type="search"
            placeholder="Start typing in a spooky movie..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </InputGroup>
    </div>
  );
}

SearchBar.propTypes = {
  search: PropTypes.string,
  setSearch: PropTypes.func
};

export default SearchBar;
