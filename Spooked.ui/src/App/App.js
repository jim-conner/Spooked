import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import firebase from 'firebase';
import Routes from '../helpers/Routes';
import NavBar from './components/NavBar';
import './App.scss';
// import { getUserByFirebaseId } from '../helpers/data/userData';

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    firebase.auth().onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        // eslint-disable-next-line no-undef
        firebaseUser.getIdToken().then((token) => sessionStorage.setItem('token', token));
        // getUserByFirebaseId(firebaseUser.uid)
        // .then((resp) => console.warn(resp.data));
        // .then((resp) => setUser(resp));
        // console.warn('if fbuser', firebaseUser.uid);
        setUser(firebaseUser);
      } else {
        console.warn('else fbuser');
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
