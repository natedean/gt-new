import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import StaffWithNotes from '../components/StaffWithNotes';
import Fretboard from '../components/Fretboard';
import AnswerButtons from '../components/AnswerButtons';
import {saveAnswer, setUserHasBeenWelcomed} from '../actions';

class Play extends Component {

  state = {
    userHasBeenWelcomed: false,
    questionIndex: 0,
    questions: [
      {
        id: 'note-E2',
        text: 'What note is this?',
        difficulty: 1,
        staff: [{ name: 'E2', yOffset: '0' }],
        fretboard: [{fret: 0, finger: 0}],
        answers: [
          {
            "text": 'E',
            "isCorrect": true
          },
          {
            "text": 'A',
            "isCorrect": false
          },
          {
            "text": 'G',
            "isCorrect": false
          },
          {
            "text": 'B',
            "isCorrect": false
          }
        ]
      },
      {
        id: 'note-A2',
        text: 'What note is this?',
        difficulty: 1,
        staff: [{name: 'A2', yOffset: '15'}],
        fretboard: [null, {fret: 0, finger: 0}],
        answers: [
          {
            "text": 'A',
            "isCorrect": true
          },
          {
            "text": 'D',
            "isCorrect": false
          },
          {
            "text": 'G',
            "isCorrect": false
          },
          {
            "text": 'B',
            "isCorrect": false
          }
        ]
      },
      {
        id: 'chord-E0',
        text: 'What chord is this?',
        difficulty: 2,
        staff: [
          { name: 'E2', yOffset: '0' },
          { name: 'B2', yOffset: '20' },
          { name: 'E3', yOffset: '35'},
          { name: 'G3', yOffset: '45'},
          { name: 'B3', yOffset: '55'},
          { name: 'E4', yOffset: '70'},
        ],
        fretboard: [{fret: 0, finger: 0}, {fret: 2, finger: 2}, {fret: 2, finger: 3}, {fret: 0, finger: 0}, {fret: 0, finger: 0}, {fret: 0, finger: 0},],
        answers: [
          {
            "text": 'E Major',
            "isCorrect": true
          },
          {
            "text": 'D Major',
            "isCorrect": false
          },
          {
            "text": 'G Major',
            "isCorrect": false
          },
          {
            "text": 'B Major',
            "isCorrect": false
          }
        ]
      }
    ]
  };

  handleAnswer = (isCorrect, answerText) => {
    const question = this.state.questions[this.state.questionIndex];

    this.props.saveAnswer(question.id, isCorrect, this.milliseconds, answerText)
  };

  render() {
    const {questions, questionIndex} = this.state;
    const {user, isAuthenticated, handleLoginClick, setUserHasBeenWelcomed, userHasBeenWelcomed} = this.props;

    const question = questions[questionIndex];

    if (!user) return (<div>No user found</div>);

    if (!userHasBeenWelcomed && user.score === 0) {
      return (
        <div>
          <div className="home body-content-with-top-margin">
            <div className="text-center">
              <h3>Alright, let's do this!</h3>
              <p>I am going to ask you some questions.
                <br/>
                Questions will get harder as you go.
                <br/>
                There will be games, and fun, and places to study if you struggle.
              </p>
              {!isAuthenticated && <p className="secondaryText">If you <a href="/#login" onClick={handleLoginClick}>Sign In</a>, your points and level will be saved.</p>}
              <button onClick={setUserHasBeenWelcomed}>SWEET, I AM READY</button>
            </div>
          </div>
        </div>
      )
    }

    if (!userHasBeenWelcomed) {
      return (
        <div>
          <div className="home body-content-with-top-margin">
            <div className="text-center">
              <h3>Welcome back!</h3>
              <p>Wow, you already have {user.score} points! That's big time.
                <br/>
                Let's continue your fast track to world domination.
              </p>
              <button onClick={setUserHasBeenWelcomed}>LET US DO THIS</button>
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className="home body-content-with-top-margin">
        <div className="text-center">
          <h3>{question.text}</h3>
          <div style={{display: 'flex', width: '400px', maxWidth: '95%', justifyContent: 'center', margin: '0 auto 2rem'}}>
            <div style={{marginRight: '3rem'}}>
              <StaffWithNotes notes={question.staff} />
            </div>
            <Fretboard notes={question.fretboard} />
          </div>
          <AnswerButtons
            answers={question.answers}
            isLimbo={false}
            isCorrectLimbo={false}
            incorrectAnswerText={'you messed up'}
            onClick={this.handleAnswer}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.root.user.data,
  userHasBeenWelcomed: state.root.userHasBeenWelcomed
});

const mapDispatchToProps = {
  saveAnswer,
  setUserHasBeenWelcomed
};

Play.propTypes = {
  user: PropTypes.object,
  isAuthenticated: PropTypes.bool.isRequired,
  handleLoginClick: PropTypes.func.isRequired,
  saveAnswer: PropTypes.func.isRequired,
  setUserHasBeenWelcomed: PropTypes.func.isRequired,
  userHasBeenWelcomed: PropTypes.bool.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Play);
