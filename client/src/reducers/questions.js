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
    default:
      return state;
  }
};

export default combineReducers({
  isLoading,
  isError,
  byID,
  allIDs
});

// Selectors
export const getCurrentQuestion = (state) => {
  const questionDict = state.byID;
  const allIDs = state.allIDs;

  if (!questionDict) return null;

  const numQuestions = allIDs.length;
  const randIndex = Math.floor(Math.random() * numQuestions);
  const questionID = allIDs[randIndex];

  return {id: questionID, ...questionDict[questionID]};
};

export const getQuestionsIsLoading = (state) => state.isLoading;
