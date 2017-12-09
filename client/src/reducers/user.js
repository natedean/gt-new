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

const isError = (state = initialAppState, action) => {
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
    default:
      return state;
  }
};

export default combineReducers({
  isLoading,
  isError,
  data
});
