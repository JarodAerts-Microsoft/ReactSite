import React from 'react';
import logo from './logo.svg';
import './App.css';

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
const Home = () => (<div><h1>Welcome MITALI</h1><Link to='/about'>Go to about</Link></div>)
const About = ({ name }) => (<div><h1>About {name}</h1></div>)

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            path="/about"
            render={(renderProps) => (
              <div>
                <Link to='/about/ari'>Ari</Link>
                <Link to='/about/nate'>Nate</Link>
                <Route
                  path="/about/:name"
                  render={(renderProps) => (
                    <div>
                      <About name={renderProps.match.params.name} />
                      <Link to='/'>Go home</Link>
                    </div>
                  )} />
              </div>
            )} />
          <Route
            path="/"
            render={(renderProps) => (
              <div>
                Home is underneath me on 11/25 11:47am
                <Home {...this.props} {...renderProps} />
              </div>
            )} />
        </Switch>
      </Router>
    )
  }
}

export default App;
