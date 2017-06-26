import React from 'react';
import ScoreDisplay from './containers/ScoreDisplay';
import CurrentQuestion from './containers/CurrentQuestion';
import './index.css';

export default () => (
  <div className="container text-center" style={{maxWidth: '600px'}}>
    <ScoreDisplay />
    <CurrentQuestion />
  </div>
);
