import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Look at this really cool spinny thing we have here.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Everything is fine.
        </a>
        <a 
          className="App-link"
          href="https://authentication.mitalikarmarkar.net/.auth/login/facebook?post_login_redirect_uri=serene-evergreen-1262eeae.mitalikarmarkar.net"
        >
        Log in with Facebook - Mitali change - see the build system works - 10/22 4:23pm!
        </a>

      </header>
    </div>
  );
}

export default App;
