import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  FormGroup, Input
} from 'reactstrap';
import getAllSubGenres from '../../helpers/data/subGenreData';

function SubGenreSelect({ select, setSelect }) {
  const [subGenres, setSubGenres] = useState([]);

  useEffect(() => {
    getAllSubGenres().then(setSubGenres);
  }, []);

  const handleOnChange = (e) => {
    setSelect(parseInt(e.target.value, 10));
  };

  return (
    <>
        <FormGroup>
            <Input
              id="subGenreSelect"
              name="subGenreSelect"
              type="select"
              value={select}
              onChange={(e) => handleOnChange(e)}
            >
              {
                  <option value={0} defaultValue>
                    Choose a subgenre
                  </option>
              }
              {
                subGenres.map((subGenre) => (
                  <option
                    key={subGenre.id}
                    value={subGenre.id}
                  >
                    {subGenre.name}
                  </option>
                ))
              }
            </Input>
        </FormGroup>
    </>
  );
}

SubGenreSelect.propTypes = {
  select: PropTypes.number.isRequired,
  setSelect: PropTypes.func.isRequired
};
export default SubGenreSelect;
