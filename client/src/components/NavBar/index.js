import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link, NavLink} from 'react-router-dom';
import './index.css';
import Fretboard from '../Fretboard';

class NavBar extends Component {
  render() {
    const {user} = this.props;

    return (
      <nav className="nav">
        <div className="nav__logo">
          <Link to="/">
            <Fretboard width="50"/>
            <div className="nav__verticalContainer">
              <span className="nav__title">GuitarThinker</span>
              {user && <div className="secondaryText">{user.name}</div>}
            </div>
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

NavBar.propTypes = {
  user: PropTypes.object
};

export default NavBar;

