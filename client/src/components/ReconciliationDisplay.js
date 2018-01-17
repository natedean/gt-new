import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Motion, spring, presets} from 'react-motion';

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
        <div style={{position: 'absolute', marginTop: '-2.8rem', width: '100%', textAlign: 'center'}}>
          <span className={isCorrect ? 'color-success' : 'color-failure'}>
            <Motion defaultStyle={{ opacity: 0 }} style={{ opacity: spring(1) }} >
              {(interpolatedStyle) =>
                <div style={interpolatedStyle}>
                  {this.setIsCorrectMessage()}
                </div>
              }
            </Motion>
          </span>
        </div>
    );
  }

}

ReconciliationDisplay.propTypes = {
  question: PropTypes.object.isRequired,
  isCorrect: PropTypes.bool.isRequired,
};

export default ReconciliationDisplay;
