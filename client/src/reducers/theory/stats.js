import {combineReducers} from 'redux';

const isLoading = (state = false, action) => {
  switch(action.type) {
    case 'FETCHING_THEORY_STATS':
      return true;
    case 'FETCH_THEORY_STATS_SUCCESS':
    case 'FETCH_THEORY_STATS_FAILURE':
      return false;
    default:
      return state;
  }
};

const isError = (state = false, action) => {
  switch(action.type) {
    case 'FETCH_THEORY_STATS_SUCCESS':
    case 'FETCHING_THEORY_STATS':
      return false;
    case 'FETCH_THEORY_STATS_FAILURE':
      return true;
    default:
      return state;
  }
};

const data = (state = null, action) => {
  switch(action.type) {
    case 'FETCH_THEORY_STATS_SUCCESS':
      return action.stats;
    case 'FETCH_THEORY_STATS_FAILURE':
      return null;
    case 'FETCHING_THEORY_STATS':
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
