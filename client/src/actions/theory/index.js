import shuffle from 'lodash.shuffle';

export const setQuestionsBank = (questions) => ({ type: 'SET_QUESTIONS_BANK', questions });

export const fetchStats = () => dispatch => {
  dispatch({ type: 'FETCHING_THEORY_STATS' });

  fetch('/api/stats')
    .then(res => res.json())
    .then(res => {
      // send action...
      dispatch({ type: 'FETCH_THEORY_STATS_SUCCESS', stats: res });
    })
    .catch(err => {
      dispatch({ type: 'FETCH_THEORY_STATS_FAILURE' });
    })
};

export const persistAnswer = (questionId, isCorrect, milliseconds) => (dispatch, getState) => {
  if (!getState().root.user.data) dispatch({ type: 'FETCHING_USER' });

  return fetch(`/api/user/answer`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      userId: getState().root.user.data && getState().root.user.data._id,
      isCorrect,
      questionId,
      milliseconds
    })
  })
    .then(res => res.json())
    .then(res => {
      const user = enrichUserResponse(res);

      dispatch({ type: 'FETCH_USER_SUCCESS', user }); // save user updates to redux store

      // right now, lets just save this during local development
      if (process.env.NODE_ENV === 'development') {
        window.localStorage.setItem('gt-user', JSON.stringify(user));
      }
    })
    .catch(err => dispatch({ type: 'FETCH_USER_FAILURE' }));
};

export const optimisticUserUpdate = (update) => (dispatch, getState) => {
  const userData = getState().root.user.data;

  if (!userData) return;

  const optimisticUserData = Object.assign({}, userData, update);
  const user = enrichUserResponse(optimisticUserData);

  dispatch({ type: 'FETCH_USER_SUCCESS', user });
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

export const answerAndPersist = (id, isCorrect, milliseconds, answerText) => (dispatch, getState) => {
  dispatch(answer(id, isCorrect));

  dispatch(persistAnswer(id, isCorrect, milliseconds));

  if (isCorrect) {
    setTimeout(() => {
      dispatch(generateAndSetNewQuestion());
    }, 200);
  } else {
    dispatch(setIncorrectAnswerText(answerText));
  }

  // if we have a user in memory, optimistically update the user's score
  const userData = getState().root.user.data;

  if (!userData) return;

  const userUpdate =
    isCorrect ? { totalCorrect: userData.totalCorrect + 1 } : { totalIncorrect: userData.totalIncorrect + 1 };

  dispatch(optimisticUserUpdate(userUpdate));
};

// helpers, may move these...
function enrichUserResponse(res) {
  const skill = calcUserSkill(res.totalCorrect, res.totalIncorrect);
  const correctRatio = (res.totalCorrect / (res.totalCorrect + res.totalIncorrect)).toFixed(2);
  return Object.assign({}, res, { skill, correctRatio });
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
