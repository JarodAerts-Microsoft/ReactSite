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
          href="https://authentication.mitalikarmarkar.net/.auth/login/fb?post_login_redirect_uri=content-river-1DA7931E.mitalikarmarkar.net"
        >
        Log in with Facebook - Mitali change - see the build system works - 10/15 5:55pm!
        </a>

      </header>
    </div>
  );
}

export default App;
