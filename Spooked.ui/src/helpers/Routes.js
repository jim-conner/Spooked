import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../App/views/Home';
import WatchList from '../App/views/WatchList';
// import PropTypes from 'prop-types';
// import { Route, Switch } from 'react-router-dom';

const PrivateRoute = ({ component: Component, user, ...rest }) => {
  const routeChecker = (remainder) => (user
    ? (<Component {...remainder} user={user} />)
    : (<Redirect to={{ pathname: '/', state: { from: remainder.location } }} />));

  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.func,
  user: PropTypes.any
};
function Routes({ user }) {
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
       <PrivateRoute
        exact path='/watchlist'
        component={() => <WatchList
          user={user}
        />}
      />
    </Switch>
    </>
  );
}

Routes.propTypes = {
  user: PropTypes.any,
};

export default Routes;
