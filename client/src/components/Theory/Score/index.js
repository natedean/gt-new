import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Score = ({score, userData, statsData}) => (
  <div className="score">
    <div>
      My score: {userData.totalCorrect}. My attempts: {userData.totalCorrect + userData.totalIncorrect}
    </div>
    <div>
      Avg score: {statsData.avgTotalCorrect}
    </div>
    <div>
      My skill: {userData.correctRatio}
    </div>
    <div>
      Avg skill: {statsData.avgCorrectRatio}
    </div>
    <svg viewBox="0 0 10 2" className="score__myScoreChart">
      <line x1="1" x2="5" y1="1" y2="1" />
    </svg>
  </div>
);


export default Score;

Score.propTypes = {
  score: PropTypes.number
};
