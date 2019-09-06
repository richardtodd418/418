import React, {Component} from 'react';
import Fact from './components/Fact';
import Footer from './components/Footer';
import logo1 from './teapot-1.svg';
import PSL from './components/PSL';

import './App.css';

class App extends Component {
  state = {
    psl: false,
    time: new Date('September 06, 2019 15:30').getTime(),
  };


  render() {
    const backgroundColor = this.state.psl ? {backgroundColor: "#e88131"} : {};
    return (
      <div className="App" style={backgroundColor}>
        <header className="App-header">
          <img src={logo1} className="App-logo" alt="logo" />
        </header>
        <Fact />
        {this.state.psl ? (
          <PSL time={this.state.time} />
        ) : (
          ''
        )}
        <Footer />
      </div>
    );
  }
}

export default App;
