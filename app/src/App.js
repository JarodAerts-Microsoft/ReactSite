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
                <div class="row justify-content-between">
                  <div class="col-4">
                    Marmelade
                  </div>

                  <div class="col-4">
                    <a class="btn btn-primary btn-lg active" role="button" aria-pressed="true" href="https://delightful-bush-17ba0cbe.mitalikarmarkar.net/.auth/login/facebook">Login and return to this page</a>
                  </div>
                </div>
                <div class="row">
                    This is a test React app to test the MSHA.
                </div>
                <div class="row">
                    This app was last updated 2/3/20 4:54pm
                </div>
                <div class="row">
                    Login first, then try to access authenticated and admin content.
                </div>

                <div class="row justify-content-between">
                  <div class="col-6">
                    Must be logged in to access this link
                  </div>

                  <div class="col-2">
                    <a class="btn btn-primary btn-lg active" role="button" aria-pressed="true" href="https://delightful-bush-17ba0cbe.mitalikarmarkar.net/authenticated">Authenticated page</a>
                  </div>
                </div>

                <div class="row justify-content-between">
                  <div class="col-6">
                    Must have "admin" role to access this link
                  </div>

                  <div class="col-2">
                  <a class="btn btn-primary btn-lg active" role="button" aria-pressed="true" href="https://delightful-bush-17ba0cbe.mitalikarmarkar.net/admin">Admin page</a>
                  </div>
                </div>
                
                {/* <Home {...this.props} {...renderProps} /> */}
                
              </div>
            )} />
        </Switch>
      </Router>
    )
  }
}

export default App;
