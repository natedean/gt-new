import React from 'react';
import {Link} from 'react-router-dom';

export default () => (
  <div className="home body-content-with-top-margin">
      <div className="text-center">
          <h3>Get Better Faster</h3>
          <h5>Learn. Play games. Be awesome.</h5>
        <p>GuitarThinker is currently under construction 🎉️. We are working hard to build some great new games. </p>
        <p>For now, give the <Link to="/games/theory" >Music Theory Game</Link> a try.</p>
      </div>
  </div>
);
