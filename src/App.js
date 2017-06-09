import React, { Component } from 'react';
import AnimatedLogo from './AnimatedLogo';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to GuitarThinker, Bro.</h2>
        </div>
        <p className="App-intro">
          Latest <code>react-scripts</code> and everything.
        </p>
        <h4>Here's another logo, just for fun.</h4>
        <AnimatedLogo/>
      </div>
    );
  }
}

export default App;
