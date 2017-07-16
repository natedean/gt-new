import { combineReducers } from 'redux';
import questions from './questions';
import correctAnswerIds from './correctAnswerIds';
import incorrectAnswerIds from './incorrectAnswerIds';
import score from './score';
import currentQuestion from './currentQuestion';
import isLimbo from './isLimbo';
import incorrectAnswerText from './incorrectAnswerText';
import skill from './skill';
import stats from './stats';

export default combineReducers({
  score,
  currentQuestion,
  correctAnswerIds,
  incorrectAnswerIds,
  skill,
  isLimbo,
  incorrectAnswerText,
  questions,
  stats
});
