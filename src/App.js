import React, { Component } from 'react';
import Fact from './components/Fact';
import logo1 from './teapot-1.svg';


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo1} className="App-logo" alt="logo" />
        </header>
        <Fact />
      </div>
    );
  }
}

export default App;

