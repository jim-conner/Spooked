import React, { useEffect, useState } from 'react';
import {
  FormGroup, Input, Label
} from 'reactstrap';

function SubGenreSelect() {
  const [subGenres, setSubGenres] = useState([]);

  useEffect(() => {
  }, []);

  return (
    <div className="selectContainer">
        <FormGroup row >
          <Label for="subGenreSelect">
          </Label>
          <Input
            id="subGenreSelect"
            name="select"
            type="select"
          >
            {subGenres.map((subGenre) => (
              <option key={subGenre.id}>
                {subGenre.name}
                {console.warn(setSubGenres)}
              </option>
            ))}
        </Input>
    </FormGroup>
    </div>
  );
}

// SubGenreSelect.propTypes = {

// };
export default SubGenreSelect;
