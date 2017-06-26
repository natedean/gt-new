import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Score = ({score, skill}) =>
  <div className="score">
    <div className="score__verticalContainer">
      <h6 className="score__topLabel">score</h6>
      <h5>{score}</h5>
    </div>
    <div>
      {!!skill &&
        <div className="score__verticalContainer">
          <h6 className="score__topLabel">Your skill level</h6>
          <h6>{`${skill < 50 ? 'Bottom' : 'Top'} ${skill}%`}</h6>
        </div>
      }
    </div>
  </div>;

export default Score;

Score.propTypes = {
  score: PropTypes.number
};
