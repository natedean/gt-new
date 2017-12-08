import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import './index.css';
import Fretboard from '../Fretboard';

class NavBar extends Component {

  login = () => {
    this.props.auth.login();
  };

  logout = () => {
    this.props.auth.logout();
  };

  render() {
    return (
      <nav className="nav">
        <div className="nav__logo">
          <Link to="/">
            <Fretboard width="50"/>
            <span className="nav__title">GuitarThinker</span>
          </Link>
        </div>
        <div className="nav__links">
          <NavLink to="/games" activeClassName="nav__link--active">Games</NavLink>
          <NavLink to="/about" activeClassName="nav__link--active">About</NavLink>
        </div>
      </nav>
    );

  }

}

export default NavBar;

