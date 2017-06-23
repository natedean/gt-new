import React from 'react';
import {Link} from 'react-router-dom';

export default () => (
  <div className="games text-center">
    <h1>Play Games.</h1>
    <Link to="/games/staff-note">Staff Note Game</Link>
  </div>
)
