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
      console.log('setting user');
      return action.user;
    case 'SET_USER_SCORE':
      const result = {...state, [`${action.gameID}_score`]: action.score};
      console.log('setting user score');
      return result;
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
