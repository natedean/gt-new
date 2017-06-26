import React from 'react';
import { connect } from 'react-redux';
import { answerAndPersist, generateAndSetNewQuestion } from '../../../actions';
import Question from '../Question';

const mapStateToProps = (state) => ({
  question: state.theory.currentQuestion,
  isLimbo: state.theory.isLimbo,
  incorrectAnswerText: state.theory.incorrectAnswerText
});

const mapDispatchToProps = (dispatch) => ({
  onAnswer(questionId, isCorrect, milliseconds, answerText) {
    dispatch(answerAndPersist(questionId, isCorrect, milliseconds, answerText));
  },
  setNewQuestion() {
    dispatch(generateAndSetNewQuestion());
  }
});

let CurrentQuestion = (props) => {
  return (
    <div className="questionContainer" style={{marginTop: '5rem'}}>
      {props.question && <Question {...props} />}
    </div>
  );
};

CurrentQuestion = connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentQuestion);

export default CurrentQuestion;

