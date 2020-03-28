import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import Quiz from './components/Quiz';
import Footer from './components/Footer';
import Leaderboard from './components/Leaderboard';
import logo1 from './bucket.png';
import './styles/App.scss';
import { Frame } from '@shopify/polaris';
import rounds from './data/rounds';
import rounds2 from './data/rounds2';
import teams from './data/teams';
import teams2 from './data/teams2';

const App = () => {
  return (
    <Router>
      <Frame>
        <div className="App">
          <div className="App-inner">
            <header className="App-header Polaris-Page-Header Polaris-Page-Header--separator Polaris-Page-Header--hasActionMenu Polaris-Page-Header__MainContent">
              <svg
                alt="logo"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="gavel"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="svg-inline--fa fa-gavel fa-w-16 fa-7x App-logo"
              >
                <path
                  fill="currentColor"
                  d="M504.971 199.362l-22.627-22.627c-9.373-9.373-24.569-9.373-33.941 0l-5.657 5.657L329.608 69.255l5.657-5.657c9.373-9.373 9.373-24.569 0-33.941L312.638 7.029c-9.373-9.373-24.569-9.373-33.941 0L154.246 131.48c-9.373 9.373-9.373 24.569 0 33.941l22.627 22.627c9.373 9.373 24.569 9.373 33.941 0l5.657-5.657 39.598 39.598-81.04 81.04-5.657-5.657c-12.497-12.497-32.758-12.497-45.255 0L9.373 412.118c-12.497 12.497-12.497 32.758 0 45.255l45.255 45.255c12.497 12.497 32.758 12.497 45.255 0l114.745-114.745c12.497-12.497 12.497-32.758 0-45.255l-5.657-5.657 81.04-81.04 39.598 39.598-5.657 5.657c-9.373 9.373-9.373 24.569 0 33.941l22.627 22.627c9.373 9.373 24.569 9.373 33.941 0l124.451-124.451c9.372-9.372 9.372-24.568 0-33.941z"
                ></path>
              </svg>
              <nav>
                <h1 className="header--title h3">Albert's Auctionhouse</h1>
                <ul>
                  <li>
                    <NavLink exact to="/">
                      Questions
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/leaderboard">Leaderboard</NavLink>
                  </li>
                </ul>
              </nav>
            </header>
            <Switch>
              <Route path="/leaderboard">
                <Leaderboard teams={teams2} />
              </Route>
              <Route path="/">
                <Quiz rounds={rounds2} />
              </Route>
              <Route path="/leaderboardflange">
                <Leaderboard teams={teams} />
              </Route>
              <Route path="/flange">
                <Quiz rounds={rounds} />
              </Route>
            </Switch>
          </div>
        </div>
        <Footer />
      </Frame>
    </Router>
  );
};

export default App;
