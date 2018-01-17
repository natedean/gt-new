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
    const initialX = isCorrect ? 200 : -200;

    return (
        <div style={{position: 'absolute', marginTop: '-2.8rem', width: '100%', textAlign: 'center'}}>
          <span className={isCorrect ? 'color-success' : 'color-failure'}>
            <Motion defaultStyle={{ x: initialX }} style={{ x: spring(0, presets.wobbly) }} >
              {(interpolatedStyles) =>
                <div style={{ transform: `translateX(${interpolatedStyles.x}px)` }}>
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
