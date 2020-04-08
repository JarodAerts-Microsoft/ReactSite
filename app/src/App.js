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

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Look at this really cool spinny thing we have here.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Everything is fine.
//         </a>
//         <a 
//           className="App-link"
//           href="https://authentication.mitalikarmarkar.net/.auth/login/facebook?post_login_redirect_uri=serene-evergreen-1262eeae.mitalikarmarkar.net"
//         >
//         Log in with Facebook - Mitali change - see the build system works - 11/8 10:12am!
//         </a>

//       </header>
//     </div>
//   );
// }

// export default App;

// const Home = () => (<div><h1>Welcome home</h1></div>)
// const Home = () => (<div><h1>Welcome MITALI</h1><Link to='/about'>Go to about</Link></div>)
// const About = ({ name }) => (<div><h1>About {name}</h1></div>)

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
                      <a class="nav-link" href="https://delightful-bush-17ba0cbe.mitalikarmarkar.net/.auth/login/facebook">Login</a>
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
                <p>This app was last updated 4/8/20 2:16pm.</p>
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
