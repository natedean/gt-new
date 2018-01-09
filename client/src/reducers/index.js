import {combineReducers} from 'redux';
import user from './user';
import questions, * as questionsSelectors from './questions';
import userHasBeenWelcomed from './userHasBeenWelcomed';

export default combineReducers({
  user,
  questions,
  userHasBeenWelcomed
});

export const getCurrentQuestion = (state) =>
  questionsSelectors.getCurrentQuestion(state.questions);

export const getQuestionsIsLoading = (state) =>
  questionsSelectors.getQuestionsIsLoading(state.questions);
