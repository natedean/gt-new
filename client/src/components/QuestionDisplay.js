import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AnswerButtons from './AnswerButtons';
import QuestionDiagrams from './QuestionDiagrams';
import ReconciliationDisplay from './ReconciliationDisplay';
import ReconciliationAnswerButtons from './ReconciliationAnswerButtons';

class QuestionDisplay extends Component {

  handleAnswer = (isCorrect) => {
    this.props.saveAnswer(this.props.question.id, isCorrect, 10000)
  };

  render() {
    const {question, reconciliationState, unsetReconciliationState} = this.props;

    return (
      <div className="home body-content-with-top-margin">
        <div style={{width: '500px', maxWidth: '95%', textAlign: 'center', margin: '0 auto', position: 'relative'}}>
          <h3>{reconciliationState === null ? question.text : question.answers.find(a => a.isCorrect).text}</h3>
          <QuestionDiagrams
            question={question}
          />
          {reconciliationState !== null &&
            <ReconciliationDisplay
              question={question}
              unsetReconciliationState={unsetReconciliationState}
              isCorrect={reconciliationState}
            />}
          {reconciliationState === null ?
            <AnswerButtons
              questionID={question.id}
              answers={question.answers}
              onClick={this.handleAnswer}
            /> :
            <ReconciliationAnswerButtons questionID={question.id} answers={question.answers}/>
          }
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
