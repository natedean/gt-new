import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Tone from 'tone';

class ReconciliationDisplay extends Component {

  componentDidMount() {
    //a 4 voice Synth
    var polySynth = new Tone.PolySynth(this.props.question.staff.length).toMaster();

    // set options
    polySynth.set({
      filter : {
        // type : "lowpass"
      },
      envelope : {
        attack : 0.03,
        decay : 0.5,
        sustain : 0.5,
        release : 0.5,
      }
    });

    //play a chord
    polySynth.triggerAttackRelease(this.props.question.staff, 1);

    console.log(this.props.question);
  }

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
