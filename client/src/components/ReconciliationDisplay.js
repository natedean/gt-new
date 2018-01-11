import React, {Component} from 'react';
import PropTypes from 'prop-types';
import QuestionDiagrams from './QuestionDiagrams';
import ReconciliationAnswerButtons from './ReconciliationAnswerButtons';

class ReconciliationDisplay extends Component {

  handleClick = () => {
    this.props.unsetReconciliationState(
      this.props.question.id,
      this.props.isCorrect
    );
  };

  render() {
    const {question, isCorrect} = this.props;

    return (
      <div className="home body-content-with-top-margin">
        <div style={{width: '400px', maxWidth: '95%', textAlign: 'center', margin: '0 auto'}}>
          <h3 className={isCorrect ? 'color-success' : ''}>
            {isCorrect ? 'Correct!' : 'Incorrect'}
          </h3>
          <QuestionDiagrams
            question={question}
          />
          <ReconciliationAnswerButtons questionID={question.id} answers={question.answers} />
          <button style={{width: '100%'}} onClick={this.handleClick}>Next</button>
        </div>
      </div>
    );
  }

}

ReconciliationDisplay.propTypes = {
  question: PropTypes.object.isRequired,
  isCorrect: PropTypes.bool.isRequired,
  unsetReconciliationState: PropTypes.func.isRequired
};

export default ReconciliationDisplay;
