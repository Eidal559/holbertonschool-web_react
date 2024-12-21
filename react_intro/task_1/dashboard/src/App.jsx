// task_2/dashboard/src/App.jsx
import React from 'react';
import './App.css';
import { getCurrentYear, getFooterCopy } from './utils';
import Notifications from './Notifications';
import logo from './assets/holberton-logo.jpg';

function App() {
  return (
    <div className="App">
      <Notifications />
      <header className="App-header">
        <img src={logo} alt="Holberton logo" />
        <h1>School dashboard</h1>
      </header>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <button>OK</button>
      </div>
      <footer className="App-footer">
        <p>Copyright {getCurrentYear()} {getFooterCopy(true)}</p>
      </footer>
    </div>
  );
}

export default App;
