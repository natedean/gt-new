import React, {Component} from 'react';
import {Motion, spring} from 'react-motion';
import Staff, {notes} from '../../components/Staff/index';
import annyang from 'annyang';
import './index.css';

navigator.getUserMedia  = navigator.getUserMedia ||
  navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia ||
  navigator.msGetUserMedia;

const commandMap = {
  a: ['a', 'eh', 'hey', 'hay', 'AAA'],
  b: ['b', 'be','bee','p','bea'],
  c: ['c', 'see','sea','SI','ce'],
  d: ['d','dee','di','dd','dee dee'],
  e: ['e','e e','e r','eat','eeh','e a'],
  f: ['f','eff','ff','f f','f e'],
  g: ['g','ge','chi','qi','gee','jeep']
};

const handleAnnyangResult = (possibleAnswerStrings, matchCallback) => {
  const commandMapKeys = Object.keys(commandMap);

  for (let i = 0; i < possibleAnswerStrings.length; i++) {
    const possibleAnswer = possibleAnswerStrings[i].toLowerCase().trim();

    for (let j = 0; j < commandMapKeys.length; j++) {
      const key = commandMapKeys[j];

      const isMatch = commandMap[key].some(x => {
        return x === possibleAnswer;
      });

      if (isMatch) {
        matchCallback(key);
        return;
      }
    }
  }
};

class StaffNote extends Component {

  height = 120;
  questionResetTime = 2000;

  state = {
    currNote: notes[Math.floor(Math.random() * notes.length)],
    answeredNoteNames: [],
    voiceRecognitionMessage: false
  };

  componentDidMount() {
    this.setState(() => ({
      voiceRecognitionMessage: this.setDefaultVoiceRecognitionMessage()
    }));

    // Start listening.
    if (!annyang) return;

    annyang.start();

    const hellFunc = () => console.log('hello!');

    const commands = {'hello': hellFunc, 'howdy': hellFunc, 'hi': hellFunc};

    annyang.addCommands(commands);

    annyang.debug();

    annyang.addCallback('result', (result) => handleAnnyangResult(result, this.annyangHandler));
  }

  componentWillUnmount() {
    if (annyang) {
      annyang.abort();
    }
  }

  annyangHandler = (matchedAnswer) => {
    this.setState(() => ({
      voiceRecognitionMessage: `What was heard: ${matchedAnswer.toUpperCase()}`
    }));

    this.setLimboState(this.isCurrNote(matchedAnswer));
  };

  answerClickHandler = (e) => {
    const answer = e.target.innerText;

    // for now, leave this simple, probably refactor at some point
    this.setLimboState(this.isCurrNote(answer));
  };

  setDefaultVoiceRecognitionMessage = () => {
    return !!annyang ? 'Voice recognition ready' : 'No voice recognition available';
  };

  setLimboState = (wasLastAnswerCorrect) => {
    const currAnsweredNote = this.state.currNote;
    const hasAnsweredAll = this.state.answeredNoteNames.length === notes.length - 1;

    this.setState((prevState) => ({
      isLimbo: true,
      wasLastAnswerCorrect,
      answeredNoteNames: hasAnsweredAll ? [] : [...prevState.answeredNoteNames, currAnsweredNote.name]
    }));

    setTimeout(() => {
      this.setState(() => ({
        isLimbo: false,
        currNote: this.findRandUnansweredNote(),
        voiceRecognitionMessage: this.setDefaultVoiceRecognitionMessage()
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
          <h4>{this.state.voiceRecognitionMessage}</h4>
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
          <div className="buttonGroup" onClick={this.answerClickHandler}>
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

export default StaffNote;
