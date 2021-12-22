import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import firebase from 'firebase';
import Routes from '../helpers/Routes';
import NavBar from './components/NavBar';
import './App.scss';

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    firebase.auth().onAuthStateChanged((userInfo) => {
      if (userInfo) {
        // when still logged in but refresh page, user remains empty instead of changing state.
        // eslint-disable-next-line no-undef
        userInfo.getIdToken().then((token) => sessionStorage.setItem('token', token))
          .then(() => console.warn(userInfo));
        // .then(
        //   getUserByFirebaseId(userInfo.uid)
        //     .then((resp) => {
        //       setUser(resp);
        //     })
        // );
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
