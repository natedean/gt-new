import React from 'react';
import {Link} from 'react-router-dom';
import Guitar from '../Guitar';
import './index.css';

export default () => (
    <nav className="nav">
        <div className="nav__logo">
            <Guitar />
        </div>
        <div className="nav__links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    </nav>
);