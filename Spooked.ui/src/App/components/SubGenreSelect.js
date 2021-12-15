import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Form, FormGroup, Input, Label
} from 'reactstrap';
import getAllSubGenres from '../../helpers/data/subGenreData';

function SubGenreSelect({ select, setSelect }) {
  const [subGenres, setSubGenres] = useState([]);

  useEffect(() => {
    getAllSubGenres().then(setSubGenres);
  }, []);

  return (
    <div className="selectContainer">
      <Form>
        <FormGroup>
          <Label for="subGenreSelect">
          </Label>
            <Input
              id="subGenreSelect"
              name="select"
              type="select"
              placeholder=""
              value={select}
              onChange={(e) => setSelect(e.target.value)}
            >
              <option defaultValue disabled>
              Filter by SubGenre
              </option>
              {
                subGenres.map((subGenre) => (
                  <option key={subGenre.id}>
                    {subGenre.name}
                  </option>
                ))
              }
            </Input>
        </FormGroup>
      </Form>
    </div>
  );
}

SubGenreSelect.propTypes = {
  movies: PropTypes.array,
  select: PropTypes.string,
  setSelect: PropTypes.func
};
export default SubGenreSelect;
