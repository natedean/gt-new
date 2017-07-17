import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Score = ({score, userData, statsData}) => {


  return (
    <div className="score">
      <div>
        My score: {userData.totalCorrect}. My attempts: {userData.totalCorrect + userData.totalIncorrect}
      </div>
      <div>
        Avg score: {statsData.avgTotalCorrect}
      </div>



      {/*NO SCALING*/}
      <div>
        My skill:
        <svg viewBox="0 0 100 2" className="score__myScoreChart" style={{transition: '3s all'}}>
          <line x1="1" x2={userData.correctRatio * 100} y1="1" y2="1" />
        </svg>
        {userData.correctRatio}
      </div>
      <div>
        Avg skill:
        <svg viewBox="0 0 100 2" className="score__myScoreChart">
          <line x1="1" x2={statsData.avgCorrectRatio * 100} y1="1" y2="1" />
        </svg>
        {statsData.avgCorrectRatio}
      </div>


    </div>
  );
};


export default Score;

Score.propTypes = {
  score: PropTypes.number
};
