import React, {Component} from 'react';
import PropTypes from 'prop-types';
import StaffWithNotes from './StaffWithNotes';
import Fretboard from './Fretboard';
import AnswerButtons from './AnswerButtons';

class QuestionDisplay extends Component {

  handleAnswer = (isCorrect, answerText) => {
    this.props.saveAnswer(this.props.question.id, isCorrect, 10000, answerText)
  };

  render() {
    const {question} = this.props;

    return (
      <div className="home body-content-with-top-margin">
        <div className="text-center">
          <h3>{question.text}</h3>
          <div style={{display: 'flex', width: '400px', maxWidth: '95%', justifyContent: 'center', margin: '0 auto 2rem'}}>
            <div style={{marginRight: '3rem'}}>
              <StaffWithNotes notes={question.staff} />
            </div>
            <Fretboard notes={question.fretboard} />
          </div>
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
