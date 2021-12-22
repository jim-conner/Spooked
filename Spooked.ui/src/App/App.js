import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import firebase from 'firebase';
import Routes from '../helpers/Routes';
import NavBar from './components/NavBar';
import './App.scss';

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    // eslint-disable-next-line no-shadow
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // eslint-disable-next-line no-undef
        user.getIdToken().then((token) => sessionStorage.setItem('token', token));
        setUser(user);
      } else {
        setUser(false);
      }
    });
  }, []);

  return (
    <div className='App'>
      <Router>
        <NavBar user={user} />
        <Routes user={user} />
      </Router>
    </div>
  );
}

export default App;
