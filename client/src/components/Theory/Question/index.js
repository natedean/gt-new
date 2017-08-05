import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { questionShape } from '../../../constants/propShapes';
import AnswerButtons from '../AnswerButtons';
import Helpers from '../Helpers';
import CorrectAnswerDisplay from '../../CorrectAnswerDisplay';
import './index.css';

class Question extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.milliseconds = 0;
  }

  onClick(isCorrect, answerText) {
    this.props.onAnswer(this.props.question.id, isCorrect, this.milliseconds, answerText)
  }

  componentDidMount() {
    this.interval = setInterval(() => this.milliseconds = this.milliseconds + 1);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.question.id !== nextProps.question.id) {
      this.milliseconds = 0;
    }
  }

  render() {
    const { question, isLimbo, isCorrectLimbo, incorrectAnswerText, setNewQuestion } = this.props;

    return (
      <div className={`question fadeIn${isCorrectLimbo ? ' isCorrectLimbo' : ''}${isLimbo ? ' isLimbo': ''}`} >
          <h5>{question.text}</h5>
          <AnswerButtons
            answers={question.answers}
            isLimbo={isLimbo}
            isCorrectLimbo={isCorrectLimbo}
            incorrectAnswerText={incorrectAnswerText}
            onClick={this.onClick}
          />
        { isCorrectLimbo && <CorrectAnswerDisplay text={question.helpers && question.helpers.text} />}
        { (isLimbo && incorrectAnswerText) && <Helpers helpers={question.helpers} />}
        { isLimbo && <button onClick={setNewQuestion} className="question__nextBtn">Next</button>}
      </div>
    )
  }
}

export default Question;

Question.propTypes = {
  question: questionShape.isRequired,
  isLimbo: PropTypes.bool.isRequired,
  isCorrectLimbo: PropTypes.bool.isRequired,
  incorrectAnswerText: PropTypes.string,
  setNewQuestion: PropTypes.func.isRequired,
  onAnswer: PropTypes.func.isRequired
};
