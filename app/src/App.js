import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Testing push on another branch. Doidfddfg more testing
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React.
        </a>
        <a 
          className="App-link"
          href="https://sleepy-zebra-15.azurestaticwebsites.net/.auth/login/aad"
        >
          Log in with Azure AD
        </a>
      </header>
    </div>
  );
}

export default App;
