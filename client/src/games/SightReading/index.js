import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Motion, spring} from 'react-motion';
import Staff, {notes} from '../../components/Staff';
import {saveAnswer} from '../../actions';
import './index.css';

class NameThisNote extends Component {

  height = 120;
  questionResetTime = 2000;

  state = {
    currNote: notes[Math.floor(Math.random() * notes.length)],
    answeredNoteNames: [],
  };

  answerButtonClickHandler = (e) => {
    const answer = e.target.innerText;

    // for now, leave this simple, probably refactor at some point
    this.handleAnswerEvent(this.isCurrNote(answer));
  };

  handleAnswerEvent = (wasLastAnswerCorrect) => {
    const currAnsweredNote = this.state.currNote;
    const hasAnsweredAll = this.state.answeredNoteNames.length === notes.length - 1;

    this.props.saveAnswer(`sr-${currAnsweredNote.name}`, wasLastAnswerCorrect);

    this.setState((prevState) => ({
      isLimbo: true,
      wasLastAnswerCorrect,
      answeredNoteNames: hasAnsweredAll ? [] : [...prevState.answeredNoteNames, currAnsweredNote.name]
    }));

    setTimeout(() => {
      this.setState(() => ({
        isLimbo: false,
        currNote: this.findRandUnansweredNote(),
      }))
    }, this.questionResetTime);
  };

  computeButtonClassName = (answer) => {
    if (!this.state.isLimbo || !this.isCurrNote(answer)) return 'answerButton';

    return `answerButton answerButton--${this.state.wasLastAnswerCorrect ? 'correct' : 'incorrect'}`;
  };

  isCurrNote = (note) => {
    return note.toLowerCase() === this.state.currNote.name.charAt(0).toLowerCase();
  };

  findRandUnansweredNote = () => {
    const remainingNotes = notes.filter(({name}) => !this.state.answeredNoteNames.includes(name));

    return remainingNotes[Math.floor(Math.random() * remainingNotes.length)];
  };

  render() {
    const {isLimbo, wasLastAnswerCorrect} = this.state;

    return (
      <div className="staffNote text-center">
        <div className="text-center">
          <h4>What note is this?</h4>
          {isLimbo && <span style={{position: 'absolute'}}>{wasLastAnswerCorrect ? 'Correct!' : 'Incorrect'} {this.state.currNote.name}</span>}
          <Staff>
            <Motion
              style={{ cy: spring(this.height - this.state.currNote.yOffset - 5, { stiffness: 100, damping: 14}),
                        opacity: spring(1) }}>
              {(style) => (
                <ellipse className="staff--quarterNoteBody"
                         cx="60"
                         cy={style.cy}
                         rx="6"
                         ry="5"
                         style={{ opacity: style.opacity }}
                />
              )}
            </Motion>
          </Staff>
          <div className="buttonGroup" onClick={this.answerButtonClickHandler}>
            <button disabled={isLimbo} className={this.computeButtonClassName('A')}>A</button>
            <button disabled={isLimbo} className={this.computeButtonClassName('B')}>B</button>
            <button disabled={isLimbo} className={this.computeButtonClassName('C')}>C</button>
            <button disabled={isLimbo} className={this.computeButtonClassName('D')}>D</button>
            <button disabled={isLimbo} className={this.computeButtonClassName('E')}>E</button>
            <button disabled={isLimbo} className={this.computeButtonClassName('F')}>F</button>
            <button disabled={isLimbo} className={this.computeButtonClassName('G')}>G</button>
          </div>
      </div>
  </div>
    )
  }
}

NameThisNote.propTypes = {
  saveAnswer: PropTypes.func.isRequired,
};

export default connect(null, {saveAnswer})(NameThisNote);
