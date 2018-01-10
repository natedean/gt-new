import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {saveAnswer, setUserHasBeenWelcomed, fetchQuestions} from '../actions';
import {getCurrentQuestion, getQuestionsIsLoading} from '../reducers';
import InitialUserWelcome from '../components/InitialUserWelcome';
import ReturningUserWelcome from '../components/ReturningUserWelcome';
import QuestionDisplay from '../components/QuestionDisplay';

class Play extends Component {

  componentWillMount() {
    this.props.fetchQuestions();
  }

  render() {
    const {
      user,
      isAuthenticated,
      handleLoginClick,
      setUserHasBeenWelcomed,
      userHasBeenWelcomed,
      question,
      isQuestionsLoading,
      saveAnswer
    } = this.props;

    // if this is a brand new user, show the initial welcome screen
    if (!userHasBeenWelcomed && user.score === 0) {
      return (
        <InitialUserWelcome
          isAuthenticated={isAuthenticated}
          handleLoginClick={handleLoginClick}
          setUserHasBeenWelcomed={setUserHasBeenWelcomed}
        />
      )
    }

    // if this is a returning user, show the returning welcome screen
    if (!userHasBeenWelcomed) {
      return (
        <ReturningUserWelcome
          score={user.score}
          setUserHasBeenWelcomed={setUserHasBeenWelcomed}
        />
      )
    }

    // check for questions loading here
    if (isQuestionsLoading) return (<div>Loading questions...</div>);

    // check for no question state
    if (!question) return (<div>No question found</div>);

    return (
      <QuestionDisplay
        question={question}
        saveAnswer={saveAnswer}
      />
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
