import React from 'react';
import logo from './logo.svg';
import './App.css';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to my test site! This site was last modified on 9/4/20 8:26pm
        </p>
        <a
          className="App-link"
          href="/shoppingList/"
        >
          Let's try some functions!
        </a>
        <a 
          className="App-link"
          href="/about/"
        >
        Gated content
        </a>
		        <a 
          className="App-link"
          href="/.auth/login/facebook"
        >
        Log in with Facebook
        </a>

      </header>
    </div>
  );
}

export default Home;
