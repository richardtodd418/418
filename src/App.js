import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Quiz from './components/Quiz';
import Footer from './components/Footer';
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
              <h1>Flange & Bucket</h1>
              <ul>
                <li>
                  <Link to="/">Questions</Link>
                </li>
                <li>
                  <Link to="/leaderboard">Leaderboard</Link>
                </li>
              </ul>
            </nav>
          </header>
          <Switch>
            <Route path="/leaderboard">
              <Dave />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
      <Footer />
    </Router>
  );
};

const Home = () => {
  return <Quiz />;
};

const Dave = () => {
  return <div>Nothing to see here yet...</div>;
};

export default App;
