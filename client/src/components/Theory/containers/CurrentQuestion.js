import React, {Component} from 'react';
import { connect } from 'react-redux';
import { answerAndPersist, generateAndSetNewQuestion, setQuestionsBank, setLeaderboard } from '../../../actions/theory';
import Question from '../Question';
import LoadingIcon from '../../LoadingIcon';

class CurrentQuestion extends Component {

  leaderboardPoller;
  leaderboardPollInterval = 30000;

  componentDidMount() {
    fetch('/api/questions')
      .then(res => res.json())
      .then(questions => {
        this.props.setQuestionsBank(questions);
        this.props.setNewQuestion();
      });

    this.pollLeaderboard();
    this.setLeaderboardPoller();
  }

  setLeaderboardPoller() {
    this.leaderboardPoller = setInterval(this.pollLeaderboard.bind(this), this.leaderboardPollInterval);
  }

  pollLeaderboard() {
    fetch('/api/users/top')
      .then(res => res.json())
      .then(users => {
        this.props.setLeaderboard(users);
      });
  }

  componentWillUnmount() {
    clearInterval(this.leaderboardPoller);
  }

  render() {
    return (
      <div className="questionContainer">
        {this.props.questions ? <div>
          {this.props.question && <Question {...this.props} />}
        </div> : <LoadingIcon />}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  questions: state.theory.questions,
  question: state.theory.currentQuestion,
  isLimbo: state.theory.isLimbo,
  isCorrectLimbo: state.theory.isLimbo && !state.theory.incorrectAnswerText,
  incorrectAnswerText: state.theory.incorrectAnswerText
});

const mapDispatchToProps = (dispatch) => ({
  onAnswer(questionId, isCorrect, milliseconds, answerText) {
    dispatch(answerAndPersist(questionId, isCorrect, milliseconds, answerText));
  },
  setNewQuestion() {
    dispatch(generateAndSetNewQuestion());
  },
  setQuestionsBank(questions) {
    dispatch(setQuestionsBank(questions))
  },
  setLeaderboard(users) {
    dispatch(setLeaderboard(users));
  }
});

CurrentQuestion = connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentQuestion);

export default CurrentQuestion;

