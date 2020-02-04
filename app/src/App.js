import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import { useCookies } from 'react-cookie';


// const Home = () => (<div><h1>Welcome home</h1></div>)
// const Home = () => (<div><h1>Welcome MITALI</h1><Link to='/about'>Go to about</Link></div>)
// const About = ({ name }) => (<div><h1>About {name}</h1></div>)


const [cookies, setCookie] = useCookies(['StaticSitesAuthCookie']);

function Test() {
  const [cookies, setCookie] = useCookies(['StaticSitesAuthCookie']);

  if (cookies.StaticSitesAuthCookie == "")
      {
        return (<div>Log in</div>);
      }
      else  {
        return (<div>Logged in</div>);
      }
}

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
                <a class="navbar-brand" href="#">Marmelade</a>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                      <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="https://delightful-bush-17ba0cbe.mitalikarmarkar.net/.auth/login/facebook">{Test()}</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="https://delightful-bush-17ba0cbe.mitalikarmarkar.net/authenticated">Authenticated</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="https://delightful-bush-17ba0cbe.mitalikarmarkar.net/admin">Admin</a>
                    </li>
                  </ul>
                </div>
              </nav>
                <div class="jumbotron">
                  <h1>Project Marmelade</h1>
                  <p>Test app</p>
                </div>
                <p>This is a test React app to test the MSHA.</p>
                <p>This app was last updated 2/3/20 4:54pm.</p>
                <p>Login first, then try to access authenticated and admin content.</p>
                
                
                {/* <Home {...this.props} {...renderProps} /> */}
                
            </div>
            )} />
        </Switch>
      </Router>
    )
  }
}

export default App;
