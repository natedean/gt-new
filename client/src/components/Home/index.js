import React from 'react';
import {Link} from 'react-router-dom';

export default () => (
  <div className="home">
      <div className="text-center">
          <h3>Get Better Faster</h3>
          <h5>Learn. Play games. Be awesome.</h5>
          <ul>
            <li><Link to="/games/staff-note" >Staff Note Game</Link></li>
            <li><Link to="/games/theory" >Music Theory Game</Link></li>
          </ul>
      </div>
  </div>
);
