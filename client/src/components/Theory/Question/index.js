import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { questionShape } from '../../../constants/propShapes';
import AnswerButtons from '../AnswerButtons';
import Helpers from '../Helpers';
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
    const { question, isLimbo, incorrectAnswerText, setNewQuestion } = this.props;

    return (
      <div className={isLimbo ? 'question' : 'question fadeIn'} >
        <h5>{question.text}</h5>
        <AnswerButtons
          answers={question.answers}
          isIncorrectLimbo={isLimbo && !!incorrectAnswerText}
          incorrectAnswerText={incorrectAnswerText}
          onClick={this.onClick}
        />
        { (isLimbo && incorrectAnswerText) &&
        <div>
          <Helpers helpers={question.helpers} />
          <button onClick={setNewQuestion} className="question__nextBtn">Next</button>
        </div>}
      </div>
    )
  }
}

export default Question;

Question.propTypes = {
  question: questionShape.isRequired,
  isLimbo: PropTypes.bool.isRequired,
  incorrectAnswerText: PropTypes.string,
  setNewQuestion: PropTypes.func.isRequired,
  onAnswer: PropTypes.func.isRequired
};
