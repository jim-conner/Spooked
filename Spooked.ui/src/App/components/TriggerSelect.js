import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  FormGroup, Input
} from 'reactstrap';
import getAllTriggers from '../../helpers/data/triggerData';

function TriggerSelect({ selectTrigger, setSelectTrigger }) {
  const [triggers, setTriggers] = useState([]);

  useEffect(() => {
    getAllTriggers().then(setTriggers);
  }, []);

  const handleOnChange = (e) => {
    setSelectTrigger(e.target.value);
  };
  return (
    <>
      <FormGroup>
            <Input
              id="triggerSelect"
              name="triggerSelect"
              type="select"
              value={selectTrigger}
              onChange={(e) => handleOnChange(e)}
            >
              {
                  <option value="" defaultValue>
                    Hide movies by trigger
                  </option>
              }
              {
                triggers.map((trigger) => (
                  <option
                    key={trigger.id}
                    value={trigger.id}
                  >
                    {trigger.name}
                  </option>
                ))
              }
            </Input>
        </FormGroup>
    </>
  );
}

TriggerSelect.propTypes = {
  selectTrigger: PropTypes.string.isRequired,
  setSelectTrigger: PropTypes.func.isRequired
};

export default TriggerSelect;
