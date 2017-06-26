import React from 'react';
import PropTypes from 'prop-types';

const AnswerButtons = ({ answers, isIncorrectLimbo, incorrectAnswerText, onClick }) => {
  return (
    <div>
      { answers.map((answer) =>
            <button style={{ marginLeft: '1em', textTransform: 'none'}}
                  disabled={isIncorrectLimbo}
                  className={constructClassName(answer, incorrectAnswerText, isIncorrectLimbo)}
                  key={answer.text} onClick={() => onClick(answer.isCorrect, answer.text)}>{answer.text}</button>
      )}
    </div>
  )
};

export default AnswerButtons;

AnswerButtons.propTypes = {
  answers: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    isCorrect: PropTypes.bool
  }).isRequired).isRequired,
  isIncorrectLimbo: PropTypes.bool.isRequired,
  onClick: PropTypes.func
};

function constructClassName(answer, incorrectAnswerText, isLimbo) {
  if (!isLimbo) { return 'answerButton'; }

  if (answer.text === incorrectAnswerText) {
    return `answerButton answerButton--${answer.isCorrect} answerButton--pulse`;
  } else {
    return `answerButton answerButton--${answer.isCorrect}`;
  }
}
