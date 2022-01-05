import React from 'react';
import { Progress } from 'reactstrap';
import PropTypes from 'prop-types';

function SpookMeter({ triggerBarValue }) {
  const handleMeterBar = () => {
    let component;
    switch (true) {
      case (triggerBarValue === 100):
        component = <Progress
        color="danger"
        value={triggerBarValue}
      >
        REALLY F----D UP
      </Progress>;
        break;
      case (triggerBarValue >= 75):
        component = <Progress
        color="danger"
        value={triggerBarValue}
      >
        Seriously Messed Up
      </Progress>;
        break;
      case (triggerBarValue >= 50):
        component = <Progress
        color="danger"
        value={triggerBarValue}
      >
        Sinister
      </Progress>;
        break;
      case (triggerBarValue >= 25):
        component = <Progress
        color="danger"
        value={triggerBarValue}
      >
        Extra Spooky
      </Progress>;
        break;
      default:
        component = <Progress
        color="danger"
        value={triggerBarValue}
      >
      </Progress>;
    }
    return component;
  };
  return (
    <div>
      {handleMeterBar()}
    </div>
  );
}

SpookMeter.propTypes = {
  triggerBarValue: PropTypes.number.isRequired
};

export default SpookMeter;
