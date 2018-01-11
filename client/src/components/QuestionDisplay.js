import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AnswerButtons from './AnswerButtons';
import QuestionDiagrams from './QuestionDiagrams';

class QuestionDisplay extends Component {

  handleAnswer = (isCorrect) => {
    this.props.saveAnswer(this.props.question.id, isCorrect, 10000)
  };

  render() {
    const {question} = this.props;

    return (
      <div className="home body-content-with-top-margin">
        <div className="text-center">
          <h3>{question.text}</h3>
          <QuestionDiagrams
            question={question}
          />
          <AnswerButtons
            answers={question.answers}
            isLimbo={false}
            isCorrectLimbo={false}
            incorrectAnswerText={'you messed up'}
            onClick={this.handleAnswer}
          />
        </div>
      </div>
    )
  }

}

QuestionDisplay.propTypes = {
  question: PropTypes.object.isRequired,
  saveAnswer: PropTypes.func.isRequired
};

export default QuestionDisplay;
