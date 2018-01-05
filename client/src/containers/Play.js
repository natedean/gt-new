import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import StaffWithNotes from '../components/StaffWithNotes';
import Fretboard from '../components/Fretboard';

class Play extends Component {

  state = {
    userHasBeenWelcomed: false,
    // question: {
    //   text: 'What note is this?',
    //   difficulty: 1,
    //   staff: [{ name: 'E2', yOffset: '0' }],
    //   fretboard: [{fret: 0, finger: 0}]
    // },
    // question: {
    //   text: 'What note is this?',
    //   difficulty: 1,
    //   staff: [{name: 'A2', yOffset: '15'}],
    //   fretboard: [null, {fret: 0, finger: 0}]
    // },
    question: {
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
      fretboard: [{fret: 0, finger: 0}, {fret: 2, finger: 2}, {fret: 2, finger: 3}, {fret: 0, finger: 0}, {fret: 0, finger: 0}, {fret: 0, finger: 0},]
    }
  };

  setUserHasBeenWelcomed = () => {
    this.setState(() => ({userHasBeenWelcomed: true}));
  };

  render() {
    const {question, userHasBeenWelcomed} = this.state;
    const {user, isAuthenticated, handleLoginClick} = this.props;

    if (!user) return (<div>No user found</div>);

    if (!userHasBeenWelcomed && user.score === 0) {
      return (
        <div>
          <div className="home body-content-with-top-margin">
            <div className="text-center">
              <h3>Alright, let's do this!</h3>
              <p>I am going to ask you some questions.
                <br/>
                Questions will get harder if you're doing well.
                <br/>
                There will be games, and fun, and places to study if you struggle.
              </p>
              {!isAuthenticated && <p className="secondaryText">If you <a href="/#login" onClick={handleLoginClick}>Sign In</a>, your points and level will be saved.</p>}
              <button onClick={this.setUserHasBeenWelcomed}>SWEET, I AM READY</button>
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
              <p>I am going to ask you some more questions.
                <br/>
                Wow, you already have {user.score} points! That's big time.
                <br/>
                Let's continue your fast track to world domination.
              </p>
              <button onClick={this.setUserHasBeenWelcomed}>LET US DO THIS</button>
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className="home body-content-with-top-margin">
        <div className="text-center">
          <h3>{question.text}</h3>
          <div style={{display: 'flex', width: '400px', maxWidth: '95%', justifyContent: 'center', margin: '0 auto'}}>
            <div style={{marginRight: '3rem'}}>
              <StaffWithNotes notes={question.staff} />
            </div>
            <Fretboard notes={question.fretboard} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.root.user.data
});

Play.propTypes = {
  user: PropTypes.object,
  isAuthenticated: PropTypes.bool.isRequired,
  handleLoginClick: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(Play);
