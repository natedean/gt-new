import {combineReducers} from 'redux';
import initialAppState from './initialAppState';

const isLoading = (state = initialAppState.user.isLoading, action) => {
  switch(action.type) {
    case 'FETCHING_USER':
      return true;
    case 'FETCH_USER_SUCCESS':
    case 'FETCH_USER_FAILURE':
      return false;
    default:
      return state;
  }
};

const isError = (state = initialAppState, action) => {
  switch(action.type) {
    case 'FETCH_USER_SUCCESS':
    case 'FETCHING_USER':
      return false;
    case 'FETCH_USER_FAILURE':
      return true;
    default:
      return state;
  }
};

const data = (state = initialAppState.user.data, action) => {
  switch(action.type) {
    case 'FETCH_USER_SUCCESS':
      return action.user;
    case 'FETCH_USER_FAILURE':
      return null;
    case 'FETCHING_USER':
      return null;
    default:
      return state;
  }
};

export default combineReducers({
  isLoading,
  isError,
  data
});
