import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import AnimatedLogo from './AnimatedLogo';
import logo from './logo.svg';
import About from './components/about/About';

import './css/normalize.css';
import './css/skeleton.css';
import './css/index.css';

import './App.css';

class App extends Component {
  render() {
    return (
        <Router>
            <div className="container">
                <Route exact path="/" render={() => (<h1>HOME!!</h1>)} />
                <Route path="/about" component={About} />
            </div>
        </Router>
    );
  }
}

export default App;
