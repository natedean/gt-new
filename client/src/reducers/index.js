import {combineReducers} from 'redux';
import user from './user';
import questions from './questions';
import userHasBeenWelcomed from './userHasBeenWelcomed';

export default combineReducers({
  user,
  questions,
  userHasBeenWelcomed
});

