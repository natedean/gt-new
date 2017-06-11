import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import About from './components/About/LazyAbout';
import NavBar from './components/NavBar';
import Home from './components/Home';

import './css/normalize.css';
import './css/skeleton.css';
import './css/index.css';

class App extends Component {
  render() {
    return (
        <Router>
            <div className="container">
                <NavBar />
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
            </div>
        </Router>
    );
  }
}

export default App;
