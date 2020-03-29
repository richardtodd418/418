import React, { Component } from 'react';
import { NavLink, Switch } from 'react-router-dom';
class Footer extends Component {
  render() {
    return (
      <div className="footerWrapper">
        <NavLink to="/flange">
          Questions
        </NavLink>
        <NavLink to="/leaderboardflange">
          Leaderboard
        </NavLink>
      </div>
    );
  }
}

export default Footer;
