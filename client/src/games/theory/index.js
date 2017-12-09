import React from 'react';
import ScoreDisplay from './containers/ScoreDisplay';
import CurrentQuestion from './containers/CurrentQuestion';
import './index.css';

export default () => (
  <div className="text-center">
      <ScoreDisplay />
      <CurrentQuestion />
  </div>
);
