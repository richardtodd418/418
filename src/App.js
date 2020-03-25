import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import Quiz from './components/Quiz';
import Footer from './components/Footer';
import Leaderboard from './components/Leaderboard';
import logo1 from './bucket.png';
import './styles/App.scss';

const App = () => {
  
  return (
    <Router>
      <div className="App">
        <div className="App-inner">
          <header className="App-header">
            <img src={logo1} className="App-logo" alt="logo" />
            <nav>
              <h1 className="header--title h3">Flange & Bucket</h1>
              <ul>
                <li>
                  <NavLink exact to="/">Questions</NavLink>
                </li>
                <li>
                  <NavLink to="/leaderboard">Leaderboard</NavLink>
                </li>
              </ul>
            </nav>
          </header>
          <Switch>
            <Route path="/leaderboard">
              <Leaderboard />
            </Route>
            <Route path="/">
              <Quiz />
            </Route>
          </Switch>
        </div>
      </div>
      <Footer />
    </Router>
  );
};


const Placeholder = () => {
  return (
    <div>
      Coming soon...
    </div>
  );
};

export default App;
