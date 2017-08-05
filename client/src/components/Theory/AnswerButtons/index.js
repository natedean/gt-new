import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const AnswerButtons = ({ answers, isLimbo, incorrectAnswerText, isCorrectLimbo, onClick }) => {
  return (
    <div>
      { answers.map((answer) =>
            <button style={{ marginLeft: '1em', textTransform: 'none'}}
                  disabled={isLimbo}
                  className={`answerButton${constructClassName(answer, isLimbo, isCorrectLimbo, incorrectAnswerText)}`}
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
  isLimbo: PropTypes.bool.isRequired,
  isCorrectLimbo: PropTypes.bool.isRequired,
  onClick: PropTypes.func
};

function constructClassName(answer, isLimbo, isCorrectLimbo, incorrectAnswerText) {
  if (!isLimbo) return '';

  const answerText = String(answer.text);

  const isChosen = (isCorrectLimbo && answer.isCorrect) || (answerText === incorrectAnswerText) ?
    ' answerButton--isChosen' : '';
  const trueFalse = answer.isCorrect ? ' answerButton--true' : ' answerButton--false';

  return `${isChosen}${trueFalse}`;
}
