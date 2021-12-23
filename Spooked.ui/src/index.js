import firebase from 'firebase';
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import { firebaseConfig } from './helpers/config';
import App from './App/App';
import 'bootstrap/dist/css/bootstrap.min.css';

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.Fragment>
    <App />
  </React.Fragment>,
  document.getElementById('root')
);
