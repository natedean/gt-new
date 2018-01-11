import React, {Component} from 'react';
import PropTypes from 'prop-types';
import QuestionDiagrams from './QuestionDiagrams';

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
        <div className="text-center">
          <h3 className={isCorrect ? 'color-success' : 'color-failure'}>
            {isCorrect ? 'Correct!' : 'Incorrect'}
          </h3>
          <QuestionDiagrams
            question={question}
          />
          <button onClick={this.handleClick}>Next</button>
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
