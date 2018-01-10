import {combineReducers} from 'redux';
import initialAppState from './initialAppState';

const isLoading = (state = initialAppState.questions.isLoading, action) => {
  switch(action.type) {
    case 'FETCHING_QUESTIONS':
      return true;
    case 'FETCH_QUESTIONS_SUCCESS':
    case 'FETCH_QUESTIONS_FAILURE':
      return false;
    default:
      return state;
  }
};

const isError = (state = initialAppState.questions.isError, action) => {
  switch(action.type) {
    case 'FETCHING_QUESTIONS':
    case 'FETCH_QUESTIONS_SUCCESS':
      return false;
    case 'FETCH_QUESTIONS_FAILURE':
      return true;
    default:
      return state;
  }
};

const byID = (state = initialAppState.questions.byID, action) => {
  switch(action.type) {
    case 'FETCH_QUESTIONS_SUCCESS':
      return action.questionDict;
    default:
      return state;
  }
};

const allIDs = (state = initialAppState.questions.allIDs, action) => {
  switch(action.type) {
    case 'FETCH_QUESTIONS_SUCCESS':
      return Object.keys(action.questionDict);
    case 'OPTIMISTIC_SAVE_ANSWER':
      return action.isCorrect ?
        state.filter(id => id !== action.questionID) : state;
    default:
      return state;
  }
};

const prevQuestionID = (state = initialAppState.questions.prevQuestionID, action) => {
  switch (action.type) {
    case 'OPTIMISTIC_SAVE_ANSWER':
      return action.questionID;
    default:
      return state;
  }
};

export default combineReducers({
  isLoading,
  isError,
  byID,
  allIDs,
  prevQuestionID
});

// Selectors
export const getCurrentQuestion = (state) => {
  const questionDict = state.byID;
  const {allIDs, prevQuestionID} = state;

  const _allIDs = allIDs.length > 1 ?
    allIDs.filter(id => id !== prevQuestionID) : allIDs;

  if (!questionDict || !_allIDs.length) return null;

  const numQuestions = _allIDs.length;
  const randIndex = Math.floor(Math.random() * numQuestions);
  const questionID = _allIDs[randIndex];

  return {id: questionID, ...questionDict[questionID]};
};

export const getQuestionsIsLoading = (state) => state.isLoading;
