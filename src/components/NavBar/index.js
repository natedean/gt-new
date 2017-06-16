import React from 'react';
import {Link} from 'react-router-dom';
import './index.css';
import Fretboard from '../Fretboard';

export default () => (
    <nav className="nav">
        <div className="nav__logo">
            <Link to="/">
                <Fretboard width="50"/>
                <span className="nav__title">GuitarThinker</span>
            </Link>
        </div>
        <div className="nav__links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    </nav>
);