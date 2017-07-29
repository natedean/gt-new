import React, {Component} from 'react';
import { connect } from 'react-redux';
import { answerAndPersist, generateAndSetNewQuestion, setQuestionsBank } from '../../../actions/theory';
import Question from '../Question';
import LoadingIcon from '../../LoadingIcon';

const mapStateToProps = (state) => ({
  questions: state.theory.questions,
  question: state.theory.currentQuestion,
  isLimbo: state.theory.isLimbo,
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
  }
});

class CurrentQuestion extends Component {

  componentDidMount() {
    fetch('/api/questions')
      .then(res => res.json())
      .then(questions => {
        this.props.setQuestionsBank(questions);
        this.props.setNewQuestion();
      });
  }

  render() {
    return (
      <div className="questionContainer" style={{marginTop: '4rem'}}>
        {this.props.questions ? <div>
          {this.props.question && <Question {...this.props} />}
        </div> : <LoadingIcon />}
      </div>
    );
  }
}

CurrentQuestion = connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentQuestion);

export default CurrentQuestion;

