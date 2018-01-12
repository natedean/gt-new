import React, {Component} from 'react';
import PropTypes from 'prop-types';
import QuestionDiagrams from './QuestionDiagrams';
import ReconciliationAnswerButtons from './ReconciliationAnswerButtons';

class ReconciliationDisplay extends Component {

  timer;

  state = {
    counter: 0
  };

  componentDidMount() {
    this.timer = setInterval(this.incrementCounter, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  componentWillUpdate() {
    const limit = this.props.isCorrect ? 1 : 4;

    if (this.state.counter >= limit) {
      this.handleClick();
    }
  }

  incrementCounter = () => {
    this.setState((prevState) => ({counter: prevState.counter + 1}));
  };

  setIsCorrectMessage = () => {
    const {isCorrect} = this.props;
    const {counter} = this.state;

    if (isCorrect) {
      return `Correct! +1`
    } else {
      return `Incorrect ${Array(counter).fill('.').join(' ')}`;
    }
  };

  handleClick = () => {
    this.props.unsetReconciliationState(
      this.props.question.id,
      this.props.isCorrect
    );
  };

  render() {
    const {question, isCorrect} = this.props;
    const text = question.answers.find(a => a.isCorrect).text;

    return (
      <div className="home body-content-with-top-margin">
        <div style={{width: '500px', maxWidth: '95%', textAlign: 'center', margin: '0 auto', position: 'relative'}}>
          <h3>
            {text}
          </h3>
          <QuestionDiagrams
            question={question}
          />
          <div style={{position: 'absolute', marginTop: '-2.8rem', width: '100%', textAlign: 'center'}}>
            <span className={isCorrect ? 'color-success' : 'color-failure'}>
              {this.setIsCorrectMessage()}
            </span>
          </div>
          <ReconciliationAnswerButtons questionID={question.id} answers={question.answers} />
        </div>
      </div>
    );
  }

}

ReconciliationDisplay.propTypes = {
  question: PropTypes.object.isRequired,
  isCorrect: PropTypes.bool.isRequired,
  unsetReconciliationState: PropTypes.func.isRequired
};

export default ReconciliationDisplay;
