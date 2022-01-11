import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  FormGroup, Input
} from 'reactstrap';
import { getAllTriggers } from '../../helpers/data/triggerData';

function TriggerSelect({ selectTrigger, setSelectTrigger }) {
  const [triggers, setTriggers] = useState([]);

  useEffect(() => {
    getAllTriggers().then(setTriggers);
  }, []);

  const handleOnChange = (e) => {
    setSelectTrigger(parseInt(e.target.value, 10));
  };

  return (
    <div className='inputContainer'>
      <FormGroup>
            <Input
              id="triggerSelect"
              name="triggerSelect"
              type="select"
              value={selectTrigger}
              onChange={(e) => handleOnChange(e)}
            >
              {
                  <option value={0} defaultValue>
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
    </div>
  );
}

TriggerSelect.propTypes = {
  selectTrigger: PropTypes.number.isRequired,
  setSelectTrigger: PropTypes.func.isRequired
};

export default TriggerSelect;
