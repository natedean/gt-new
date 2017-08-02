import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const CorrectAnswerDisplay = ({ text }) => (
  <div className="correctAnswerDisplay">
    <p className="correctAnswerDisplay__textLine"><strong>Correct!</strong></p>
    { text && <p className="correctAnswerDisplay__textLine">{text}</p> }
  </div>
);

CorrectAnswerDisplay.propTypes = {
  text: PropTypes.string
};

export default CorrectAnswerDisplay;
