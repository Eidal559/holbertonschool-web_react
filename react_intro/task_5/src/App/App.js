import logo from './logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from '../utils';

function App() {
  return (
    <div className="container">
      <header className="App-header">
        <img src={logo} alt=""holbertonLogo />
        <h1>School dashboard</h1>
      </header>
      <body className='App-body'>
        <p>Login to access the full dashboard</p>
        <label htmlFor="email" id='emaill'>Email</label>
        <input type="email" id='email'/>
        <label htmlFor="password" id='passwordd'>Password</label>
        <input type="password" id="password" />
        <button>OK</button>
      </body>
      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(1)}</p>
      </footer>
    </div>
  )
}

export default App