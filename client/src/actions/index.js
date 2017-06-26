import shuffle from 'lodash.shuffle';

export const setQuestionsBank = (questions) => ({ type: 'SET_QUESTIONS_BANK', questions });

export const persistAnswer = (questionId, isCorrect, milliseconds) => (dispatch, getState) => {
  return fetch(`${process.env.REACT_APP_API_URI}/user/answer`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      userId: getState().userId,
      isCorrect,
      questionId,
      milliseconds
    })
  })
    .then(res => res.json())
    .then(res => {
      dispatch({ type: 'UPDATE_USER_DATA', user: enrichUserResponse(res) });
    })
    .catch(err => dispatch({ type: 'UPDATE_USER_ERROR' }));
};

export const answer = (id, isCorrect) => ({
  type: 'ANSWER',
  id,
  isCorrect
});

export const setQuestion = (question) => ({ type: 'SET_QUESTION', question });

export const resetAnswers = () => ({ type: 'RESET_ANSWERS' });

export const generateAndSetNewQuestion = () => (dispatch, getState) => {
  const state = getState();

  const remainingQuestions = getRemainingQuestions(state);

  if (!remainingQuestions.length) {
    dispatch(resetAnswers());
    dispatch(generateAndSetNewQuestion());
    return;
  }

  const currQuestionId = remainingQuestions[Math.floor(Math.random() * remainingQuestions.length)];

  const currQuestion = Object.assign({}, state.theory.questions[currQuestionId]);

  const shuffledAnswers = shuffle(currQuestion.answers.slice());

  const newQuestion = Object.assign({}, currQuestion, { answers: shuffledAnswers });

  dispatch(setQuestion(newQuestion));
};

export const setIncorrectAnswerText = (text) => ({ type: 'SET_INCORRECT_ANSWER_TEXT', text });

export const answerAndPersist = (id, isCorrect, milliseconds, answerText) => dispatch => {
  dispatch(answer(id, isCorrect));
  dispatch(persistAnswer(id, isCorrect, milliseconds));

  if (isCorrect) {
    setTimeout(() => {
      dispatch(generateAndSetNewQuestion());
    }, 200);
  } else {
    dispatch(setIncorrectAnswerText(answerText));
  }
};

// helpers, may move these...
function enrichUserResponse(res) {
  const skill = calcUserSkill(res.totalCorrect, res.totalIncorrect);
  return Object.assign({}, res, { skill });
}

function calcUserSkill(totalCorrect, totalIncorrect) {
  const totalAnswered = totalCorrect + totalIncorrect;

  const calcFn = totalAnswered < 5 ? getNewbTotalCalc : getTotalCalc;

  return Math.round(calcFn(totalCorrect, totalAnswered) * 100);
}

function getNewbTotalCalc(totalCorrect, totalAnswered) {
  // TODO: adjust calc weights when we get avgSpeed
  const correctAnswersCalc = (totalCorrect / totalAnswered) * 0.5;

  const newbiePenaltyCalc = (totalCorrect / 5) * 0.5;

  const totalCalc = correctAnswersCalc + newbiePenaltyCalc;

  return totalCalc;
}

function getTotalCalc(totalCorrect, totalAnswered) {
  // TODO: adjust calc weights when we get avgSpeed
  const correctAnswersCalc = (totalCorrect / totalAnswered) * 1;

  return correctAnswersCalc;
}

function getRemainingQuestions(state) {
  const questionBankIds = Object.keys(state.theory.questions);
  if (questionBankIds.length > (state.theory.correctAnswerIds.length + state.theory.incorrectAnswerIds.length)) {
    return questionBankIds.filter(id => {
      return !state.theory.correctAnswerIds.includes(id) && !state.theory.incorrectAnswerIds.includes(id);
    });
  } else {
    return state.theory.incorrectAnswerIds.slice();
  }
}
