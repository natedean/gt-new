import React from 'react';
import {Link} from 'react-router-dom';

export default () => (
  <div className="home body-content-with-top-margin">
      <div className="text-center">
        <h5>What would you like to study today?</h5>
        <div className="vertical-button-array">
          <button>Chords</button>
          <button>Scales</button>
          <button>Sight Reading</button>
          <button>Interval/Melody</button>
        </div>
      </div>
  </div>
);
