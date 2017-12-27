import {combineReducers} from 'redux';
import initialAppState from './initialAppState';

const isLoading = (state = initialAppState.user.isLoading, action) => {
  switch(action.type) {
    case 'CREATING_USER':
    case 'FETCHING_USER':
      return true;
    case 'CREATE_USER_SUCCESS':
    case 'CREATE_USER_FAILURE':
    case 'FETCH_USER_SUCCESS':
    case 'FETCH_USER_FAILURE':
      return false;
    default:
      return state;
  }
};

const isError = (state = initialAppState.user.isError, action) => {
  switch(action.type) {
    case 'CREATING_USER':
    case 'FETCHING_USER':
    case 'FETCH_USER_SUCCESS':
      return false;
    case 'CREATE_USER_FAILURE':
    case 'FETCH_USER_FAILURE':
      return true;
    default:
      return state;
  }
};

const data = (state = initialAppState.user.data, action) => {
  switch(action.type) {
    case 'SET_USER':
      return action.user;
    case 'SET_USER_SCORE':
      return {...state, [`${action.gameID}_score`]: action.score};
    case 'OPTIMISTIC_SAVE_ANSWER':
      if (!action.isCorrect) return state;

      const newScore = state[`${action.gameID}_score`] + 1;
      return {...state, [`${action.gameID}_score`]: newScore};
    default:
      console.log('returning default');
      return state;
  }
};

export default combineReducers({
  isLoading,
  isError,
  data
});
