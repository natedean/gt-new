import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AnswerButtons from './AnswerButtons';
import QuestionDiagrams from './QuestionDiagrams';
import ReconciliationDisplay from './ReconciliationDisplay';
import ReconciliationAnswerButtons from './ReconciliationAnswerButtons';
import {Motion, spring, presets} from 'react-motion';

class QuestionDisplay extends Component {

  timer;
  reconciliationCounterSpeed = 800;

  constructor(props) {
    super(props);

    this.state = this.getDefaultState();
  }

  componentWillUnmount() {
    this.clearReconciliationTimer()
  }

  handleUnsetReconciliationState = () => {
    this.setState(() => this.getDefaultState());

    this.props.unsetReconciliationState(
      this.props.question.id,
      this.props.reconciliationState
    );
  };

  handleSetReconciliationWaitPhase = () => {
    this.setState(this.getReconciliationWaitState());
  };

  clearReconciliationTimer = () => {
    console.log('clearing reconciliation timer', this.timer);
    clearInterval(this.reconciliationTimer);
  };

  incrementReconciliationCounter = () => {
    if (this.state.reconciliationCounter >= 1) {
      this.handleUnsetReconciliationMessagePhase();
      return;
    }

    this.setState((prevState) => ({reconciliationCounter: prevState.reconciliationCounter + 1}));
  };

  handleAnswer = (isCorrect) => {
    // save answer event
    this.props.saveAnswer(this.props.question.id, isCorrect, 10000);

    // set isReconciliationMessagePhase
    this.setState(() => this.getReconciliationMessageState());

    // set reconciliationTimer
    this.reconciliationTimer = setInterval(this.incrementReconciliationCounter, this.reconciliationCounterSpeed);
  };

  handleUnsetReconciliationMessagePhase = () => {
    if (this.props.reconciliationState === true) {
      this.handleUnsetReconciliationState();
    } else {
      this.handleSetReconciliationWaitPhase();
    }
    this.clearReconciliationTimer();
  };

  getDefaultState = () => ({
    isQuestionPhase: true,
    isReconciliationMessagePhase: false,
    isReconciliationWaitPhase: false,
    reconciliationCounter: 0,
    prevQuestion: null
  });

  getReconciliationMessageState = () => ({
    isQuestionPhase: false,
    isReconciliationMessagePhase: true,
    isReconciliationWaitPhase: false,
    reconciliationCounter: 0
  });

  getReconciliationWaitState = () => ({
    isReconciliationMessagePhase: false,
    isReconciliationWaitPhase: true,
    reconciliationCounter: 0
  });

  willLeave = () => {
    console.log('LEAVING!');
    return {x: spring(-400)}
  };

  render() {
    const { isQuestionPhase,
            isReconciliationMessagePhase,
            isReconciliationWaitPhase,
          } = this.state;

    const {question, reconciliationState} = this.props;
    const startingX = Math.random() > 0.5 ? -70 : 70;

    return (
      <div className="home body-content-with-top-margin">
        <div style={{width: '500px', maxWidth: '95%', textAlign: 'center', margin: '0 auto', position: 'relative'}}>
          <p style={{ fontSize: '1.3rem', marginTop: '-1rem', marginBottom: '1rem' }}>
            Difficulty: {question.difficulty}
            <br />
            Category: {question.category}
          </p>
          {isQuestionPhase ? <Motion
              defaultStyle={{ x: startingX, opacity: 0 }}
              style={{x: spring(0, presets.gentle), opacity: spring(1)}}>
              {(interpolatedStyle) => (
                <div style={{transform: `translateX(${interpolatedStyle.x}px)`, opacity: interpolatedStyle.opacity}}>
                  <h3>
                    {reconciliationState === null ? question.text : question.answers.find(a => a.isCorrect).text}
                  </h3>
                  <QuestionDiagrams
                    question={question}
                  />
                  <AnswerButtons
                    questionID={question.id}
                    answers={question.answers}
                    onClick={this.handleAnswer}
                  />
                </div>)}
          </Motion> : <div>
            <h3>
              {reconciliationState === null ? question.text : question.answers.find(a => a.isCorrect).text}
            </h3>
            <QuestionDiagrams
              question={question}
            />
            {isReconciliationMessagePhase &&
            <ReconciliationDisplay
              question={question}
              isCorrect={reconciliationState}
            />}
            {isReconciliationMessagePhase &&
            <ReconciliationAnswerButtons questionID={question.id} answers={question.answers}/>
            }
            {isReconciliationWaitPhase && <Motion defaultStyle={{y: 150}} style={{y: spring(0, presets.gentle)}}>
              {(interpolatedStyle) => (
                <button
                  style={{width: '100%', transform: `translateY(${interpolatedStyle.y}px)`}}
                  onClick={this.handleUnsetReconciliationState}>
                  Next
                </button>
              )}
            </Motion>}
          </div>}
        </div>
      </div>
    )
  }

}

QuestionDisplay.propTypes = {
  question: PropTypes.object.isRequired,
  saveAnswer: PropTypes.func.isRequired,
  reconciliationState: PropTypes.bool,
  unsetReconciliationState: PropTypes.func.isRequired
};

export default QuestionDisplay;
