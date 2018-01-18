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
    case 'UNSET_RECONCILIATION_STATE':
      // if the answer was incorrect... do nothing...
      if (!action.isCorrect) return state;

      // if blended-mode answer, remove blended mode and sub-in non
      const newQuestionIDs = action.questionID.includes('/') ? [] : [
        `${action.questionID}/staff`, `${action.questionID}/fretboard`
      ];

      return state
        .filter(id => id !== action.questionID)
        .concat(newQuestionIDs);
    default:
      return state;
  }
};

const prevQuestionID = (state = initialAppState.questions.prevQuestionID, action) => {
  switch (action.type) {
    case 'UNSET_RECONCILIATION_STATE':
      return action.questionID;
    default:
      return state;
  }
};

const currQuestion = (state = initialAppState.questions.currQuestion, action) => {
  switch (action.type) {
    case 'SET_CURR_QUESTION':
      return action.question;
    default:
      return state;
  }
};

export default combineReducers({
  isLoading,
  isError,
  byID,
  allIDs,
  prevQuestionID,
  currQuestion
});

// Selectors
export const getCurrentQuestion = (state) => state.currQuestion;

export const getQuestionsIsLoading = (state) => state.isLoading;
