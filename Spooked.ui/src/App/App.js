import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../helpers/Routes';
import NavBar from './components/NavBar';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar/>
        <Routes
        />
      </Router>
    </div>
  );
}

export default App;
