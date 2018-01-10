import * as services from '../services';
import shuffle from "lodash.shuffle";

export const setUser = (user) => (dispatch, getState) => {
  // update store
  dispatch({
    type: 'SET_USER',
    user
  });

  // update local storage
  localStorage.setItem('gt_user', JSON.stringify(user));
};

export const saveAnswer = (questionID, isCorrect) => (dispatch, getState) => {
  const user = getState().root.user.data;

  dispatch({
    type: 'OPTIMISTIC_SAVE_ANSWER',
    questionID,
    isCorrect
  });

  // update server
  services.saveAnswer(user.id, questionID, isCorrect)
    .then(res => {
      dispatch({
        type: 'SAVE_ANSWER_SUCCESS', // not sure if we need to do anything on success...
      })
    })
    .catch(() => {
      alert('There has been a problem saving your answer');
    });

  // update locally, only if correct answer...
  if (!isCorrect) return;

  const newScore = user.score + 1;

  setUser({...user, score: newScore})(dispatch, getState);
};

export const setUserHasBeenWelcomed = () => ({
  type: 'USER_WELCOME_COMPLETE'
});

export const fetchQuestions = () => (dispatch, getState) => {
  const user = getState().root.user.data;

  return services.getQuestions(user.id)
    .then(res => {
      dispatch({
        type: 'FETCH_QUESTIONS_SUCCESS', // not sure if we need to do anything on success...
        questionDict: res
      });
    })
    .catch(() => {
      dispatch({
        type: 'FETCH_QUESTIONS_FAILURE', // not sure if we need to do anything on success...
      });

      alert('There has been a problem retrieving questions.');
    });
};

export const unsetReconciliationState = (questionID, isCorrect) => (dispatch, getState) => {
  dispatch({
    type: 'UNSET_RECONCILIATION_STATE',
    questionID,
    isCorrect
  });

  setRandCurrQuestion()(dispatch, getState);
};

export const setRandCurrQuestion = () => (dispatch, getState) => {
  const state = getState().root.questions;

  const {byID, allIDs, prevQuestionID} = state;

  const _allIDs = allIDs.length > 1 ?
    allIDs.filter(id => id !== prevQuestionID) : allIDs;

  if (!byID || !_allIDs.length) {
    dispatch({
      type: 'SET_CURR_QUESTION',
      question: null
    });
    return;
  }

  const numQuestions = _allIDs.length;
  const randIndex = Math.floor(Math.random() * numQuestions);
  const questionID = _allIDs[randIndex];
  const question = byID[questionID];

  dispatch({
    type: 'SET_CURR_QUESTION',
    question: {
      id: questionID,
      ...question,
      answers: shuffle(question.answers)
    }
  })
};
