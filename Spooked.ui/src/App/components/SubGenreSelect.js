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
              placeholder="Filter by SubGenre"
              value={select}
              onChange={(e) => setSelect(e.target.value)}
            >
              {
                select === 0
                  ? <option value={0} defaultValue disabled>
                    Filter by SubGenre
                    </option>
                  : ''
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
      </Form>
    </div>
  );
}

SubGenreSelect.propTypes = {
  select: PropTypes.number.isRequired,
  setSelect: PropTypes.func.isRequired
};
export default SubGenreSelect;
