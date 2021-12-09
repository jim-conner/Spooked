import React, { useState } from 'react';
import './App.scss';

function App() {
  // delete the hook and handleClick
  const [domWriting, setDomWriting] = useState('Nothing Here!');

  const handleClick = (e) => {
    console.warn(`You clicked ${e.target.id}`);
    setDomWriting(`You clicked ${e.target.id}! Check the Console!`);
  };

  return (
    <div className='App'>
      {/* delete lines between the divs */}
      <h2>INSIDE APP COMPONENT</h2>
      <div>
        <button
          id='this-button'
          className='btn btn-info'
          onClick={handleClick}
        >
          I am THIS button
        </button>
      </div>
      <div>
        <button
          id='that-button'
          className='btn btn-primary mt-3'
          onClick={handleClick}
        >
          I am THAT button
        </button>
      </div>
      <h3>{domWriting}</h3>
      {/* delete lines above */}
    </div>
  );
}

export default App;
