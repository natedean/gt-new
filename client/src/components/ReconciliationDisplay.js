import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Motion, spring} from 'react-motion';

class ReconciliationDisplay extends Component {
  setIsCorrectMessage = () => {
    const {isCorrect} = this.props;

    if (isCorrect) {
      return `Correct! +1`
    } else {
      return `Incorrect`;
    }
  };

  render() {
    const {isCorrect} = this.props;

    return (
        <div
          className={isCorrect ? 'color-success' : 'color-failure'}
          style={{ marginBottom: '2.5rem' }}>
          <span className="fadeIn">{this.setIsCorrectMessage()}</span>
        </div>
    );
  }

}

ReconciliationDisplay.propTypes = {
  question: PropTypes.object.isRequired,
  isCorrect: PropTypes.bool.isRequired,
};

export default ReconciliationDisplay;
