import React from 'react';
import './App.css';
import holbertonLogo from './assets/holberton-logo.jpg';

function App() {
  return (
    <div>
      <div className="App-header">
        <img src={holbertonLogo} alt="holberton logo" />
        <h1 style={{ color: '#e1003c' }}>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <div className="App-footer">
        <p>Copyright 2024 - Holberton School</p>
      </div>
    </div>
  );
}

export default App;
