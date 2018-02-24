import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AnswerButtons from './AnswerButtons';
import QuestionDiagrams from './QuestionDiagrams';
import ReconciliationDisplay from './ReconciliationDisplay';
import ReconciliationAnswerButtons from './ReconciliationAnswerButtons';
import {Motion, spring, presets} from 'react-motion';

class QuestionDisplay extends Component {

  constructor(props) {
    super(props);

    this.state = this.getDefaultState();
  }

  handleAnswer = (isCorrect) => {
    // save answer event
    this.props.saveAnswer(this.props.question.id, isCorrect, 10000);

    // set isReconciliationMessagePhase
    this.setState(() => ({isQuestionPhase: false}));
  };

  getDefaultState = () => ({
    isQuestionPhase: true,
    reconciliationCounter: 0,
    prevQuestion: null
  });

  render() {
    const { isQuestionPhase, reconciliationCounter} = this.state;

    const {question, reconciliationState} = this.props;

    const isInstructPhase = reconciliationCounter > 1;

    return console.log(reconciliationCounter, isInstructPhase) || (
      <div className="home body-content-with-top-margin">
        <div style={{width: '500px', maxWidth: '95%', textAlign: 'center', margin: '0 auto', position: 'relative'}}>
          <QuestionDiagrams question={question}/>
          {isQuestionPhase && <div>
            <p>
              {reconciliationState === null ? question.text : question.answers.find(a => a.isCorrect).text}
            </p>
            <AnswerButtons
              questionID={question.id}
              answers={question.answers}
              onClick={this.handleAnswer}
            />
          </div>}
          {!isQuestionPhase && <div>
            {isInstructPhase ? <p>
              {question.answers.find(a => a.isCorrect).text}
              </p> : <ReconciliationDisplay
              question={question}
              isCorrect={reconciliationState}
            />}
            <ReconciliationAnswerButtons questionID={question.id} answers={question.answers}/>
          </div>}
        </div>
      </div>
    )
  }

}

QuestionDisplay.propTypes = {
  question: PropTypes.object.isRequired,
  saveAnswer: PropTypes.func.isRequired,
  reconciliationState: PropTypes.bool,
  unsetReconciliationState: PropTypes.func.isRequired
};

export default QuestionDisplay;
