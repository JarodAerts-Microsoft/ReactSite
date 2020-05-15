import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import ShoppingList from './ShoppingList';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'


class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            path="/"
            render={(renderProps) => (
              <div class="container">
              <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="/">Marmelade</a>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                      <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/.auth/login/facebook">Login</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/about">Authenticated Content</a>
                    </li>
                  </ul>
                </div>
              </nav>
                <div class="jumbotron">
                  <h1>Static Web Apps - Explorer Interns 2020 Demo</h1>
                  <p>Test app</p>
                </div>
                <p>This is a test react app</p>
                <p>This app was last updated 5/14/20 10:23pm.</p>                
            </div>
            )} />
          <Route path="/shoppingList/" component={ShoppingList}/>
        </Switch>
      </Router>
    )
  }
}

export default App;
