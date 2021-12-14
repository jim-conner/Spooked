import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../App/views/Home';
// import PropTypes from 'prop-types';
// import { Route, Switch } from 'react-router-dom';

function Routes() {
  return (
    <>
    <Switch>
      <Route
        exact path='/'
        component={() => <Home
        />}
      />

      <Route
        exact path='/browse/'
        component={() => <Home
        />}
      />
       <Route
        exact path='/watchlist'
        component={() => <Home
        />}
      />
    </Switch>
    </>
  );
}

export default Routes;
