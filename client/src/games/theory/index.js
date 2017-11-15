import React from 'react';
import ScoreDisplay from './containers/ScoreDisplay';
import CurrentQuestion from './containers/CurrentQuestion';
import UserPrompt from '../../containers/UserPrompt/index';
import './index.css';

export default () => (
  <div className="text-center">
    <UserPrompt>
      <ScoreDisplay />
      <CurrentQuestion />
    </UserPrompt>
  </div>
);
