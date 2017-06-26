import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import LazyAbout from './components/About/LazyAbout';
import LazyStaffNote from './components/StaffNote/LazyIndex';
import LazyTheory from './components/Theory/LazyIndex';
import LazyUsers from './components/Users/LazyIndex';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Games from './components/Games';

import './css/normalize.css';
import './css/skeleton.css';
import './css/index.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <NavBar />
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={LazyAbout}/>
          <Route path="/users" component={LazyUsers}/>
          <Route exact path="/games" component={Games}/>
          <Route path="/games/staff-note" component={LazyStaffNote}/>
          <Route path="/games/theory" component={LazyTheory}/>
        </div>
      </Router>
    );
  }
}

export default App;
