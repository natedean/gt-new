import React from 'react';
import PropTypes from 'prop-types';

const ReconciliationAnswerButtons = ({ questionID, answers }) => {
  return (
    <div>
      { answers.map((answer) =>
        <button
          disabled
          className={`answerButton${answer.isCorrect ? ' answerButton--correct' : ''}`}
          key={`${questionID}-${answer.text}`}
        >{answer.text}</button>
      )}
    </div>
  )
};

export default ReconciliationAnswerButtons;

ReconciliationAnswerButtons.propTypes = {
  questionID: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    isCorrect: PropTypes.bool
  }).isRequired).isRequired,
};
