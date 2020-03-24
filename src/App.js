import React, { useState } from 'react';
import Quiz from './components/Quiz';
import Footer from './components/Footer';
import logo1 from './bucket.png';
import './styles/App.scss';

const App = () => {
  return (
    <div className="App">
      <div className="App-inner">
        <header className="App-header">
          <img src={logo1} className="App-logo" alt="logo" />
        </header>
        <Quiz />
        <Footer />
      </div>
    </div>
  );
};

export default App;
