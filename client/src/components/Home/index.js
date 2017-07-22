import React from 'react';
import {Link} from 'react-router-dom';

export default () => (
  <div className="home">
      <div className="text-center">
          <h3>Get Better Faster</h3>
          <h5>Learn. Play games. Be awesome.</h5>
          <p>Been working hard on some great new stuff.  For now, give the <Link to="/games/theory" >Music Theory Game</Link> a try.</p>
      </div>
  </div>
);
