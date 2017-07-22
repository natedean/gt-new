import React from 'react';
import {Link} from 'react-router-dom';

export default () => (
  <div className="games text-center">
    <h1>Play Games.</h1>
    <ul>
      <li><Link to="/games/theory">Music Theory Game</Link></li>
      {process.env.NODE_ENV === 'development' && <li><Link to="/games/staff-note">Staff Note Game</Link></li>}
    </ul>
    <p>More games coming soon</p>
  </div>
)
