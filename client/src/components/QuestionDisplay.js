import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AnswerButtons from './AnswerButtons';
import QuestionDiagrams from './QuestionDiagrams';
import ReconciliationDisplay from './ReconciliationDisplay';
import ReconciliationAnswerButtons from './ReconciliationAnswerButtons';
import {Motion, spring, presets} from 'react-motion';

class QuestionDisplay extends Component {

  timer;
  reconciliationCounterSpeed = 1000;

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
      this.props.isCorrect
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
    const limit = this.props.reconciliationState ? 1 : 2;

    if (this.state.reconciliationCounter >= limit) {
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
    reconciliationCounter: 0
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

  render() {
    const { isQuestionPhase,
            isReconciliationMessagePhase,
            isReconciliationWaitPhase
          } = this.state;
    const {question, reconciliationState} = this.props;

    return (
      <div className="home body-content-with-top-margin">
        <div style={{width: '500px', maxWidth: '95%', textAlign: 'center', margin: '0 auto', position: 'relative'}}>
          <Motion defaultStyle={{opacity: 0}} style={{opacity: spring(1, presets.gentle)}}>
            {(interpolatedStyle) => (
              <h3 style={interpolatedStyle}>
                {reconciliationState === null ? question.text : question.answers.find(a => a.isCorrect).text}
              </h3>
            )}
          </Motion>
          {reconciliationState === null ? <Motion defaultStyle={{x: 75}} style={{x: spring(0, presets.gentle)}}>
            {(interpolatedStyle) => (
              <div style={{transform: `translateX(${interpolatedStyle.x}px)`}}>
                <QuestionDiagrams
                  question={question}
                />
              </div>
            )}
          </Motion> : <QuestionDiagrams
            question={question}
          />}
          {isReconciliationMessagePhase &&
            <ReconciliationDisplay
              question={question}
              isCorrect={reconciliationState}
            />}
          {isReconciliationMessagePhase &&
            <ReconciliationAnswerButtons questionID={question.id} answers={question.answers}/>
          }
          {isQuestionPhase && <Motion defaultStyle={{opacity: 0}} style={{opacity: spring(1, presets.gentle)}}>
            {(interpolatedStyle) => (
              <div style={interpolatedStyle}>
                <AnswerButtons
                  questionID={question.id}
                  answers={question.answers}
                  onClick={this.handleAnswer}
                />
              </div>
            )}
          </Motion>}
          {isReconciliationWaitPhase && <Motion defaultStyle={{y: 50}} style={{y: spring(0, presets.gentle)}}>
            {(interpolatedStyle) => (
              <button
                style={{width: '100%', transform: `translateY(${interpolatedStyle.y}px)`}}
                onClick={this.handleUnsetReconciliationState}>
                Next
              </button>
            )}
          </Motion>}
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
