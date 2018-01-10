import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import StaffWithNotes from '../components/StaffWithNotes';
import Fretboard from '../components/Fretboard';
import AnswerButtons from '../components/AnswerButtons';
import {saveAnswer, setUserHasBeenWelcomed, fetchQuestions} from '../actions';
import {getCurrentQuestion, getQuestionsIsLoading} from '../reducers';

class Play extends Component {

  componentWillMount() {
    this.props.fetchQuestions();
  }

  handleAnswer = (isCorrect, answerText) => {
    this.props.saveAnswer(this.props.question.id, isCorrect, this.milliseconds, answerText)
  };

  render() {
    const {
      user,
      isAuthenticated,
      handleLoginClick,
      setUserHasBeenWelcomed,
      userHasBeenWelcomed,
      question,
      isQuestionsLoading
    } = this.props;

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

    // check for questions loading here
    if (isQuestionsLoading) return (<div>Loading questions...</div>);

    // check for no question state
    if (!question) return (<div>No question found</div>);

    console.log(question);

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
  userHasBeenWelcomed: state.root.userHasBeenWelcomed,
  isQuestionsLoading: getQuestionsIsLoading(state.root),
  question: getCurrentQuestion(state.root)
});

const mapDispatchToProps = {
  saveAnswer,
  setUserHasBeenWelcomed,
  fetchQuestions
};

Play.propTypes = {
  user: PropTypes.object,
  isAuthenticated: PropTypes.bool.isRequired,
  handleLoginClick: PropTypes.func.isRequired,
  saveAnswer: PropTypes.func.isRequired,
  setUserHasBeenWelcomed: PropTypes.func.isRequired,
  userHasBeenWelcomed: PropTypes.bool.isRequired,
  question: PropTypes.object,
  isQuestionsLoading: PropTypes.bool.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Play);
