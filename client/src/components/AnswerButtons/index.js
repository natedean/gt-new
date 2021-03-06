import React from 'react';
import PropTypes from 'prop-types';

const AnswerButtons = ({ questionID, answers, onClick }) => {
  return (
    <div>
      { answers.map((answer) =>
            <button
                className="answerButton"
                key={`${questionID}-${answer.text}`}
                onClick={() => onClick(answer.isCorrect, answer.text)}>{answer.text}</button>
      )}
    </div>
  )
};

export default AnswerButtons;

AnswerButtons.propTypes = {
  questionID: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    isCorrect: PropTypes.bool
  }).isRequired).isRequired,
  onClick: PropTypes.func
};
