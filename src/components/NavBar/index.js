import React from 'react';
import {Link} from 'react-router-dom';
import Guitar from '../Guitar';
import './index.css';
import Fretboard from '../Fretboard';

export default () => (
    <nav className="nav">
        <div className="nav__logo">
            <Fretboard/>
            <span className="nav__title">GuitarThinker</span>
        </div>
        <div className="nav__links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    </nav>
);