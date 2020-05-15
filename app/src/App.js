import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './Home';
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
      <div>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/shoppingList/" component={ShoppingList}/>
        </Switch>
      </div>
      </Router>
    )
  }
}

export default App;
