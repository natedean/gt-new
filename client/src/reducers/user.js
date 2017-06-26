import {combineReducers} from 'redux';
import initialAppState from './initialAppState';

const isLoading = (state = initialAppState.user.isLoading, action) => {
  switch(action.type) {
    case 'USER_FETCHING':
      return true;
    case 'USER_FETCHED':
      return false;
    default:
      return state;
  }
};

const data = (state = initialAppState.user.data, action) => {
  switch(action.type) {
    case 'USER_FETCHED':
      return action.user;
    case 'USER_FETCHING':
      return initialAppState.user.data;
    default:
      return state;
  }
};

export default combineReducers({
  isLoading,
  data
});
