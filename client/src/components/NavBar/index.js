import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import './index.css';
import Fretboard from '../Fretboard';

const NavBar = () => (
  <nav className="nav">
    <div className="nav__logo">
      <Link to="/">
        <Fretboard width="50"/>
        <div className="nav__verticalContainer">
          <span className="nav__title">GuitarThinker</span>
        </div>
      </Link>
    </div>
    <div className="nav__links">
      <NavLink to="/about" activeClassName="nav__link--active">About</NavLink>
    </div>
  </nav>
);


export default NavBar;

